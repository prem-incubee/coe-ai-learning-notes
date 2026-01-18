# Tokens and Context Windows

## What are Tokens?

Tokens are the fundamental units that LLMs use to process text. Think of them as the "words" that the model actually sees.

### Key Concepts

- **Tokens ≠ Words**: One word can be multiple tokens, or one token can represent part of a word
- **Tokenization**: The process of breaking text into tokens
- **Token-based Processing**: LLMs read and generate text token by token

### Examples of Tokenization

```
"Hello, world!"
→ Might be: ["Hello", ",", " world", "!"]
→ 4 tokens

"Unbelievable"
→ Might be: ["Un", "believ", "able"]
→ 3 tokens

"I love AI"
→ Might be: ["I", " love", " AI"]
→ 3 tokens
```

### Why Tokens Matter

1. **Cost**: Many APIs charge per token
2. **Limits**: Models have maximum token limits
3. **Processing**: Understanding tokens helps estimate resource usage
4. **Efficiency**: Better token usage = better performance

### Token Estimation

General rules of thumb:
- **English**: ~1 token per 4 characters or ~0.75 tokens per word
- **Code**: Usually more tokens per character
- **Special characters**: Each may be its own token

## Context Windows

The **context window** is the maximum amount of text (in tokens) that an LLM can consider at once.

### What is a Context Window?

- The "memory" or "attention span" of the model
- Includes both input (your prompt) and output (the response)
- Measured in tokens

### Context Window Sizes (Examples)

Different models have different context windows:

- **GPT-3.5**: 4K - 16K tokens
- **GPT-4**: 8K - 128K tokens (varies by version)
- **Claude 3 Sonnet**: 200K tokens
- **Claude 4 Sonnet**: Up to 200K tokens with context awareness

### Practical Implications

#### What Fits in a Context Window?

Approximate examples:
- **4K tokens**: ~3,000 words or ~6 pages
- **8K tokens**: ~6,000 words or ~12 pages
- **128K tokens**: ~96,000 words or ~300 pages
- **200K tokens**: ~150,000 words or ~500 pages

#### Context Window Management

When you exceed the context window:
- **Older information is lost** (in traditional models)
- **Context is truncated** from the beginning
- **Conversation continuity breaks** beyond the limit

### Advanced: Context Awareness in Claude 4.5

Claude 4.5 models feature **context awareness**:
- The model tracks its remaining context window ("token budget")
- Can manage context more effectively
- Understands how much space it has to work
- Can save state and continue with fresh context windows

This enables:
- Better long-horizon reasoning
- Multi-window workflows
- Persistent state across sessions

## Working Within Token Limits

### Best Practices

1. **Be concise**: Clear and direct prompts use fewer tokens
2. **Prioritize information**: Put important content first
3. **Summarize when needed**: Compress long contexts
4. **Monitor usage**: Keep track of token consumption

### Strategies for Long Conversations

1. **Summarization**: Periodically summarize the conversation
2. **Selective context**: Only include relevant previous messages
3. **External memory**: Store information outside the context (files, databases)
4. **Chunking**: Break large tasks into smaller pieces

## Token Management in Practice

### Example: Efficient Prompting

**Inefficient** (wastes tokens):
```
I would like you to please help me understand, if you don't mind,
what the difference is between supervised and unsupervised learning,
and I would really appreciate it if you could explain it in simple terms.
```
~30 tokens

**Efficient** (same intent, fewer tokens):
```
Explain the difference between supervised and unsupervised learning
in simple terms.
```
~15 tokens

### Example: Context Window Planning

If working with a 4K token context window:
- Reserve ~2K tokens for your input/instructions
- Reserve ~2K tokens for the model's response
- Adjust based on your needs

## LLM Settings That Affect Output

### Temperature

**Controls randomness in outputs**

- **Low temperature (0.0 - 0.3)**:
  - More predictable, deterministic
  - Better for factual, consistent outputs
  - Good for: code, math, factual Q&A

- **High temperature (0.7 - 1.0)**:
  - More creative, diverse
  - Better for creative writing, brainstorming
  - Good for: storytelling, ideation

**Example**:
```
Prompt: "Complete: The sky is"

Temperature 0.0: "blue" (predictable)
Temperature 1.0: "painted with dreams" (creative)
```

### Top P (Nucleus Sampling)

**Controls diversity by limiting token choices**

- **Low Top P (0.1 - 0.5)**: More focused, precise
- **High Top P (0.9 - 1.0)**: More diverse options

**Best Practice**: Adjust temperature OR top_p, not both

### Max Length

**Limits the number of tokens generated**

- Prevents overly long responses
- Controls costs
- Ensures concise outputs

### Stop Sequences

**Strings that halt generation**

Example:
```
Stop sequence: "\n\n"
Stops generation at double line breaks
```

Useful for:
- Structured outputs
- Preventing rambling
- Format control

### Frequency Penalty

**Penalizes repeated tokens based on frequency**

- Higher values → less repetition
- Good for: avoiding redundancy

### Presence Penalty

**Penalizes any repeated tokens equally**

- Promotes diverse vocabulary
- Good for: creative, varied text

**Best Practice**: Use frequency penalty OR presence penalty, not both

## Practical Exercises

### Exercise 1: Token Estimation
Estimate tokens for:
1. Your favorite quote
2. A paragraph from a book
3. A function in your codebase

Then verify using a tokenizer tool.

### Exercise 2: Context Planning
Plan a conversation with a 4K context window:
- How much background context can you provide?
- How much room for the response?
- What information is essential vs. nice-to-have?

### Exercise 3: Setting Experimentation
Try the same prompt with:
- Temperature 0.0
- Temperature 0.5
- Temperature 1.0

Observe the differences.

## Key Takeaways

1. **Tokens are the basic units** LLMs use to process text
2. **Context windows limit** how much text the model can consider
3. **Token management** is crucial for efficiency and cost
4. **Settings like temperature** significantly affect output behavior
5. **Understanding these concepts** makes you a more effective prompt engineer

## Common Pitfalls

- Ignoring token limits and having context truncated
- Using verbose language unnecessarily
- Not adjusting temperature for the task type
- Assuming words = tokens (they don't!)
- Exceeding context windows without a management strategy

## Next Steps

Now that you understand how LLMs process text, move on to [03-prompt-engineering-basics.md](./03-prompt-engineering-basics.md) to learn effective prompting techniques.
