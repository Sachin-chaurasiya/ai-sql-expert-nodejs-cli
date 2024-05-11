import { openai } from '@ai-sdk/openai';
import { CoreMessage, Message, streamText } from 'ai';
import dotenv from 'dotenv';

import * as readline from 'node:readline/promises';
import { SYSTEM_PROMPT } from './propmt.constant';

// Load environment variables
dotenv.config();

// Create a terminal interface
const terminal = readline.createInterface({
  input: process.stdin, // stream to read from
  output: process.stdout, // stream to write to
});

// Create a list of messages
const messages: Message[] = [];

async function main() {
  // Start the conversation
  while (true) {
    // Ask the user for input
    const userInput = await terminal.question('You: ');

    // If the user types "exit", then exit the program
    if (userInput === 'exit') {
      process.exit(0);
    }

    // Add the user's message to the list of messages
    messages.push({ role: 'user', content: userInput } as Message);

    // Stream the conversation
    const result = await streamText({
      model: openai('gpt-3.5-turbo'),
      system: SYSTEM_PROMPT,
      messages: messages as CoreMessage[],
    });

    // Print the assistant's response
    let fullResponse = '';
    process.stdout.write('\nAssistant: ');

    // Stream the response
    for await (const delta of result.textStream) {
      fullResponse += delta;
      process.stdout.write(delta);
    }
    // Add a newline character
    process.stdout.write('\n\n');

    // Add the assistant's message to the list of messages
    messages.push({ role: 'assistant', content: fullResponse } as Message);
  }
}

main().catch(console.error);
