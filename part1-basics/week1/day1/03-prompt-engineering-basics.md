# Prompt Engineering Basics

## What is Prompt Engineering?

**Prompt engineering** is the practice of designing and refining prompts to get better outputs from LLMs.

> "Prompt engineering encompasses a wide range of skills and techniques that are useful for interacting and developing with LLMs. Prompt engineering skills help to better understand the capabilities and limitations of large language models."

## Why Prompt Engineering Matters

The quality of LLM outputs depends on:
- **What information you provide** - Context and details
- **How well-crafted the prompt is** - Structure and clarity
- **Understanding the model's capabilities** - What works and what doesn't

## Core Prompt Components

Effective prompts typically contain:

1. **Instructions or questions** - What you want the model to do
2. **Contextual information** - Background the model needs
3. **Input data** - Specific content to process
4. **Demonstrations or examples** - Show what you want (few-shot)

## General Principles for Effective Prompts

### 1. Be Explicit with Your Instructions

Claude 4.x models (and similar modern LLMs) respond well to clear, explicit instructions.

**Less effective**:
```
Create an analytics dashboard
```

**More effective**:
```
Create an analytics dashboard. Include as many relevant features and
interactions as possible. Go beyond the basics to create a fully-featured
implementation.
```

### 2. Add Context to Improve Performance

Providing **why** something is important helps the model understand your goals.

**Less effective**:
```
NEVER use ellipses
```

**More effective**:
```
Your response will be read aloud by a text-to-speech engine, so never
use ellipses since the text-to-speech engine will not know how to
pronounce them.
```

The model can generalize from the explanation!

### 3. Be Vigilant with Examples & Details

Models pay close attention to:
- Details in your examples
- Patterns you demonstrate
- The specifics you provide

Ensure your examples align with behaviors you want.

### 4. Tell the Model What TO Do (Not What NOT to Do)

**Less effective**:
```
Do not use markdown in your response
```

**More effective**:
```
Your response should be composed of smoothly flowing prose paragraphs.
```

### 5. Match Your Prompt Style to Desired Output

The formatting style in your prompt influences the response style.

Want clean prose? Use clean prose in your prompt.
Want structured output? Use structure in your prompt.

## Fundamental Prompting Techniques

### Zero-Shot Prompting

**Definition**: Asking the model to perform a task without providing examples.

The model relies entirely on its training knowledge.

**Example**:
```
Q: What is prompt engineering?
A: [Model generates answer based on training]
```

**When to use**:
- Simple, common tasks
- When the model likely knows the answer
- Quick queries

### Few-Shot Prompting

**Definition**: Providing examples before asking the model to perform the task.

Enables **in-context learning** - the model learns from examples in the prompt.

**Example**:
```
Q: What is 2 + 2?
A: 4

Q: What is 5 + 3?
A: 8

Q: What is 7 + 6?
A: [Model continues the pattern]
```

**When to use**:
- Complex or unusual tasks
- When you want specific formatting
- Pattern recognition tasks
- Custom behaviors

See [04-few-shot-learning.md](./04-few-shot-learning.md) for detailed examples.

## Prompt Formatting Standards

### Simple Question Format
```
What is [topic]?
```

### Q&A Format
```
Q: [Question]?
A: [Expected answer style]
```

### Classification Format
```
Input: [Text to classify]
Label: [Category]

Input: [New text]
Label: [Model predicts]
```

## Improving Prompts Through Specificity

### Example: Vague vs. Specific

**Vague**:
```
The sky is
```
→ Produces vague, unpredictable completions

**Specific**:
```
Complete the sentence: The sky is
```
→ Produces targeted, useful completions

## Advanced Techniques (Preview)

These will be covered in more depth in later days:

- **Chain-of-Thought**: Ask the model to show its reasoning
- **Retrieval Augmented Generation (RAG)**: Provide relevant documents
- **Self-Consistency**: Generate multiple answers and select the best
- **Tree of Thoughts**: Explore multiple reasoning paths

## Control Response Format

### Using XML Tags for Structure

**Effective technique**:
```
Write the prose sections of your response in
<smoothly_flowing_prose_paragraphs> tags.
```

### Detailed Formatting Instructions

**Example** (from Anthropic's guide):
```
When writing reports, documents, technical explanations, analyses,
or any long-form content, write in clear, flowing prose using complete
paragraphs and sentences. Use standard paragraph breaks for organization
and reserve markdown primarily for `inline code`, code blocks (```...```),
and simple headings.

DO NOT use ordered lists (1. ...) or unordered lists (*) unless:
a) you're presenting truly discrete items where a list format is best
b) the user explicitly requests a list

Instead of listing items with bullets or numbers, incorporate them
naturally into sentences.
```

## Practical Exercise: 10 Progressive Prompts

Create 10 prompts that show progressive improvement. Here's a framework:

### Prompt 1 (Baseline - Vague)
```
Tell me about Python
```

### Prompt 2 (Add specificity)
```
Explain what Python is used for
```

### Prompt 3 (Add context)
```
Explain what Python is used for. I'm a beginner programmer trying to
choose my first language.
```

### Prompt 4 (Add structure)
```
Explain what Python is used for. I'm a beginner programmer trying to
choose my first language. Include: 1) main use cases, 2) pros and cons,
3) learning resources.
```

### Prompt 5 (Add output format)
```
Explain what Python is used for. I'm a beginner programmer trying to
choose my first language.

Provide:
- Main use cases
- Pros and cons
- Learning resources

Write in a conversational tone suitable for beginners.
```

**Continue this pattern**, adding:
- More specific requirements
- Examples of what you want
- Constraints (what to avoid)
- Desired length or depth
- Formatting preferences

## Key Patterns That Work

### The "Expert" Pattern
```
You are an expert in [domain]. [Task with domain-specific requirements]
```

### The "Step-by-Step" Pattern
```
Explain [concept] step-by-step, as if teaching someone who has never
encountered it before.
```

### The "Examples First" Pattern
```
Here are examples of [task]:
[Example 1]
[Example 2]

Now do the same for: [new input]
```

### The "Context + Constraint" Pattern
```
Context: [Background information]
Constraint: [Limitations or requirements]
Task: [What to do]
```

## Common Pitfalls to Avoid

1. **Being too vague** - "Tell me about AI" vs. "Explain how transformers work in NLP"
2. **Conflicting instructions** - Asking for both "brief" and "comprehensive"
3. **Assuming knowledge** - Not providing necessary context
4. **Over-complicating** - Using 100 words when 20 would do
5. **Not iterating** - Expecting perfection on the first try

## Testing and Iteration

### The Iteration Process

1. **Start simple** - Basic prompt
2. **Test** - See what you get
3. **Identify gaps** - What's missing or wrong?
4. **Refine** - Add specificity, examples, constraints
5. **Repeat** - Keep improving

### Example Iteration

**Iteration 1**:
```
Write a function to sort a list
```

**Iteration 2** (add language):
```
Write a Python function to sort a list
```

**Iteration 3** (add requirements):
```
Write a Python function to sort a list of integers in ascending order
```

**Iteration 4** (add constraints):
```
Write a Python function to sort a list of integers in ascending order
using the bubble sort algorithm. Include comments explaining each step.
```

**Iteration 5** (add examples):
```
Write a Python function to sort a list of integers in ascending order
using the bubble sort algorithm. Include comments explaining each step.

Example:
Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]
```

## Measuring Prompt Quality

Good prompts should:
- ✓ Produce consistent results across runs (at low temperature)
- ✓ Be clear to another human reading them
- ✓ Include necessary context without verbosity
- ✓ Specify desired format and structure
- ✓ Account for edge cases
- ✓ Be maintainable and modifiable

## Key Takeaways

1. **Be explicit** - Clear instructions get better results
2. **Provide context** - Explain why things matter
3. **Use examples** - Show what you want (few-shot)
4. **Iterate** - First prompts rarely perfect
5. **Match style** - Your prompt style influences output style
6. **Be specific** - Vague prompts get vague results
7. **Structure matters** - Format your prompts clearly

## Practice Assignment

Write 10 progressively better prompts for a task of your choice. Document:
- Each prompt version
- What you improved
- How the output changed
- What you learned

## Next Steps

- Dive deeper into [04-few-shot-learning.md](./04-few-shot-learning.md)
- Understand [05-ai-limitations.md](./05-ai-limitations.md)
- Explore [06-code-prompt-patterns.md](./06-code-prompt-patterns.md)
