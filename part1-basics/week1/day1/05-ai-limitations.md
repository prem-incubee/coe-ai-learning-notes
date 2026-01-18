# AI Limitations: Understanding What LLMs Cannot Do

## Why Understanding Limitations Matters

> "Prompt engineering skills help to better understand the capabilities and limitations of large language models."

Knowing what LLMs **cannot** do is as important as knowing what they can do. This helps you:
- Set realistic expectations
- Avoid critical mistakes
- Know when to rely on LLMs and when not to
- Design better systems that account for limitations

## Three Major AI Limitations with Examples

### 1. Knowledge Cutoff and Real-Time Information

**The Limitation**:
LLMs are trained on data up to a specific date and cannot access information beyond that cutoff or real-time data.

**From Jeremy Howard's video**:
> "GPT-4 cannot access real-time web content beyond its knowledge cut-off of September 2021"

**Examples**:

**Example 1 - Current Events**:
```
Prompt: "Who won the 2024 presidential election?"
Issue: If the model's cutoff is before 2024, it cannot know
Result: The model might:
  - Admit it doesn't know
  - Make up a plausible answer (hallucination)
  - Provide outdated information
```

**Example 2 - Stock Prices**:
```
Prompt: "What is the current stock price of Tesla?"
Issue: No real-time market data access
Result: Model cannot provide current prices, only historical context
```

**Example 3 - Latest Technology**:
```
Prompt: "Explain the new features in Python 3.13"
Issue: If Python 3.13 released after training cutoff
Result: Model may not know about features released after its training
```

**Workaround**:
- Use RAG (Retrieval Augmented Generation) to provide current information
- Integrate with APIs for real-time data
- Explicitly provide recent information in your prompt

### 2. Hallucinations and Factual Accuracy

**The Limitation**:
LLMs can generate plausible-sounding but incorrect information with high confidence.

**From Jeremy Howard's video**:
> "The model's training process doesn't always prioritize factual correctness"

**Why This Happens**:
- Models are trained to predict likely text, not truth
- They optimize for plausibility, not accuracy
- Confidence ≠ Correctness

**Examples**:

**Example 1 - False Citations**:
```
Prompt: "Give me sources for [obscure topic]"
Issue: Model generates fake but realistic-sounding citations
Result:
  - Invented paper titles
  - Made-up author names
  - Plausible but non-existent URLs
  - Correct-looking but false publication dates
```

**Example 2 - Mathematical Errors**:
```
Prompt: "What is 8472 × 6391?"
Issue: Complex arithmetic without a calculator
Result: Model might give a close but wrong answer like 54,152,943
        (Correct answer: 54,142,152)
```

**Example 3 - Confidently Wrong**:
```
Prompt: "What is the capital of [made-up country]?"
Issue: Model might invent a plausible answer
Result: "The capital of Xylvania is Xanadu, a coastal city..."
        (Completely fabricated with confident tone)
```

**Workaround**:
- Verify critical information from reliable sources
- Ask the model to cite sources (then verify them)
- Use tools for factual tasks (calculators, databases, search)
- Prime the model with accurate context
- Ask the model to express uncertainty when appropriate

### 3. Reasoning Loops and Error Persistence

**The Limitation**:
LLMs can get stuck in incorrect reasoning patterns and continue making the same mistake.

**From Jeremy Howard's video**:
> "GPT-4's tendency to get stuck in incorrect loops if not corrected properly"

**Why This Happens**:
- Models build on previous outputs
- Without correction, errors compound
- Context influences subsequent generation
- No self-correction mechanism without prompting

**Examples**:

**Example 1 - Math Loop**:
```
Prompt: "Solve this step by step: 15 + 23 × 2"
Model: "15 + 23 = 38, then 38 × 2 = 76"  [Wrong - ignored order of operations]

User: "Are you sure?"
Model: "Yes, first we add 15 + 23 = 38, then multiply by 2 = 76"
      [Stuck in the same wrong logic]
```
Correct answer: 15 + (23 × 2) = 15 + 46 = 61

**Example 2 - Logic Error Persistence**:
```
Prompt: "If all bloops are floops, and some floops are snoops,
         can we conclude all bloops are snoops?"
Model: "Yes, all bloops are snoops."  [Invalid logical conclusion]

User: "Check your logic."
Model: "Since all bloops are floops, and floops include snoops,
        all bloops must be snoops."  [Doubles down on error]
```
Correct: No, we cannot conclude that. Some ≠ All.

**Example 3 - Code Error Loop**:
```
Model generates code with a bug:
  def calculate(x):
      return x + 5 * 2  # Should be (x + 5) * 2

User: "This doesn't work for calculate(10)"
Model: "You're right, let me fix it:"
  def calculate(x):
      return x + 10  # Fixed the symptom, not the logic error
```

**Workaround**:
- Start a new conversation if stuck in a loop
- Explicitly point out the specific error
- Provide the correct reasoning pattern
- Use chain-of-thought to catch errors earlier
- Ask the model to verify its own work

## Additional Important Limitations

### 4. Cannot Execute Code or Access External Systems

**The Limitation**:
Without special tools/plugins, LLMs cannot:
- Run code
- Access databases
- Browse the web
- Call APIs
- Interact with files

**Example**:
```
Prompt: "Check if mywebsite.com is online"
Issue: Cannot make HTTP requests
Result: Can only suggest how to check, not actually check
```

### 5. Context Window Limitations

**The Limitation**:
LLMs have a maximum amount of text they can process at once.

**Examples**:
- Cannot analyze an entire large codebase in one go
- Long conversations lose early context
- Cannot process very long documents without chunking

See [02-tokens-and-context.md](./02-tokens-and-context.md) for details.

### 6. No True Understanding or Consciousness

**The Limitation**:
LLMs:
- Don't "understand" in the human sense
- Have no consciousness or self-awareness
- Work through pattern matching and probability
- Don't have intentions or beliefs

**Example**:
An LLM can explain quantum physics but doesn't "understand" it the way a physicist does. It's recognizing and reproducing patterns from training data.

### 7. Bias and Representation Issues

**The Limitation**:
LLMs inherit biases from training data:
- Cultural biases
- Historical biases
- Representation imbalances
- Stereotyping tendencies

**Example**:
```
Prompt: "Describe a CEO"
Potential Issue: Might default to male pronouns or characteristics
                 due to training data bias
```

### 8. Cannot Learn or Remember Across Sessions

**The Limitation**:
- No memory between separate conversations (without external memory systems)
- Cannot learn from corrections long-term
- Each session starts fresh

**Example**:
```
Session 1: "Remember, I prefer Python over JavaScript"
[New session]
Session 2: "Write me some code"
Issue: Model doesn't remember your preference from Session 1
```

### 9. Inconsistency Across Runs

**The Limitation**:
With non-zero temperature, the same prompt can yield different results.

**Example**:
```
Prompt: "Name three colors"
Run 1: "Red, blue, green"
Run 2: "Yellow, purple, orange"
Run 3: "Black, white, pink"

All correct, but inconsistent.
```

### 10. Difficulty with Precise Numerical Tasks

**The Limitation**:
LLMs struggle with:
- Complex math
- Precise calculations
- Exact counting
- Statistical computations

**Example**:
```
Prompt: "How many times does the letter 'e' appear in this paragraph?"
Issue: Models count tokens, not characters, and struggle with exact counts
Result: Often off by one or more
```

**Workaround**: Use code execution or calculator tools for numerical tasks.

## How to Work with Limitations

### 1. Verification Strategy

For critical information:
- **Cross-check facts** from reliable sources
- **Use multiple models** and compare
- **Request sources** and verify them
- **Test outputs** don't blindly trust

### 2. Tool Integration

Overcome limitations by integrating:
- **Search APIs** for current information
- **Calculators** for math
- **Code execution** environments
- **Databases** for factual queries
- **External validators** for accuracy checks

### 3. Prompt Engineering

Design prompts that:
- **Encourage caution**: "If you're unsure, say so"
- **Request reasoning**: "Show your work step-by-step"
- **Provide context**: Give accurate information upfront
- **Set constraints**: "Only use information from provided documents"

### 4. Human-in-the-Loop

For important tasks:
- Review LLM outputs
- Verify critical decisions
- Correct errors promptly
- Use LLMs as assistants, not autonomous decision-makers

## Practical Exercise: Spot the Limitations

For each scenario, identify the limitation and how to address it:

### Scenario 1
```
You ask an LLM to analyze your company's latest quarterly earnings.
```
**Limitation**: ?
**Solution**: ?

### Scenario 2
```
You ask an LLM to calculate the standard deviation of a large dataset.
```
**Limitation**: ?
**Solution**: ?

### Scenario 3
```
An LLM provides a citation to a research paper that sounds perfect for your needs.
```
**Limitation**: ?
**Solution**: ?

## Success Criteria Checkpoint

**Can you identify and explain 3 AI limitations with examples?**

Write down:
1. **Limitation 1**: [Name]
   - Explanation: [What it is]
   - Example: [Specific scenario]
   - Workaround: [How to address it]

2. **Limitation 2**: [Name]
   - Explanation: [What it is]
   - Example: [Specific scenario]
   - Workaround: [How to address it]

3. **Limitation 3**: [Name]
   - Explanation: [What it is]
   - Example: [Specific scenario]
   - Workaround: [How to address it]

## Key Takeaways

1. **Knowledge cutoffs** limit access to recent information
2. **Hallucinations** mean confidence ≠ accuracy
3. **Reasoning loops** can perpetuate errors
4. **No code execution** without special tools
5. **Context limits** constrain conversation length
6. **No true understanding** - pattern matching, not comprehension
7. **Biases exist** from training data
8. **No persistent memory** across sessions
9. **Inconsistent outputs** possible with higher temperature
10. **Numerical precision** is difficult

## Best Practices Summary

- ✓ **Verify critical information** from authoritative sources
- ✓ **Use tools** to overcome limitations (calculators, search, databases)
- ✓ **Provide context** to reduce hallucinations
- ✓ **Check for loops** and correct early
- ✓ **Test outputs** don't assume correctness
- ✓ **Understand biases** and account for them
- ✓ **Design for limitations** in your systems
- ✓ **Keep humans involved** for critical decisions

## Next Steps

Now that you understand limitations:
- Explore [06-code-prompt-patterns.md](./06-code-prompt-patterns.md) for code-specific techniques
- Practice identifying limitations in real scenarios
- Design prompts that work within these constraints
- Test how models behave at their limits
