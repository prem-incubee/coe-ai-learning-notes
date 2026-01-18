# Few-Shot Learning: Teaching by Example

## What is Few-Shot Learning?

**Few-shot learning** is a technique where you provide the model with a few examples of the task you want it to perform, then ask it to complete a similar task.

This enables **in-context learning** - the model learns the pattern from your examples without any additional training.

## Why Few-Shot Learning Works

LLMs are trained to:
1. Recognize patterns in text
2. Continue patterns they observe
3. Generalize from examples

When you provide examples, the model:
- Identifies the pattern you're demonstrating
- Applies that pattern to new inputs
- Matches the style, format, and approach of your examples

## Zero-Shot vs. Few-Shot

### Zero-Shot (No Examples)
```
Classify the sentiment: "I love this product!"
```

The model uses its training to understand the task.

### Few-Shot (With Examples)
```
Classify the sentiment:

Text: "I love this product!"
Sentiment: Positive

Text: "This is terrible."
Sentiment: Negative

Text: "It's okay, nothing special."
Sentiment: Neutral

Text: "Best purchase ever!"
Sentiment: [Model predicts: Positive]
```

The model learns from your examples.

## Structure of Few-Shot Prompts

### Basic Structure

```
[Instruction - Optional but helpful]

[Example 1]
[Example 2]
[Example 3]
...

[New Input]
```

### Key Components

1. **Consistent formatting** - All examples follow the same pattern
2. **Clear input-output pairs** - Show what goes in and what comes out
3. **Representative examples** - Cover different cases
4. **New input** - The actual task to complete

## Few-Shot Learning Examples

### Example 1: Text Classification

**Prompt:**
```
Classify the following emails as spam or not spam:

Email: "Congratulations! You've won $1,000,000! Click here now!"
Classification: Spam

Email: "Hi John, are we still meeting for lunch tomorrow?"
Classification: Not Spam

Email: "URGENT: Your account will be closed unless you verify now!"
Classification: Spam

Email: "Here's the report you requested. Let me know if you need changes."
Classification: [Model predicts: Not Spam]
```

### Example 2: Format Transformation

**Prompt:**
```
Convert natural language to JSON format:

Input: John Doe is 30 years old and lives in New York
Output: {"name": "John Doe", "age": 30, "city": "New York"}

Input: Sarah Smith is 25 years old and lives in Los Angeles
Output: {"name": "Sarah Smith", "age": 25, "city": "Los Angeles"}

Input: Mike Johnson is 35 years old and lives in Chicago
Output: [Model generates JSON]
```

### Example 3: Code Generation Pattern

**Prompt:**
```
Generate Python functions based on descriptions:

Description: Function that adds two numbers
Code:
def add(a, b):
    return a + b

Description: Function that multiplies two numbers
Code:
def multiply(a, b):
    return a * b

Description: Function that finds the maximum of two numbers
Code: [Model generates function]
```

### Example 4: Style Transfer

**Prompt:**
```
Rewrite sentences in a formal style:

Casual: "Hey, can you send me that file?"
Formal: "Could you please send me that file?"

Casual: "The meeting was super boring."
Formal: "The meeting was not engaging."

Casual: "Let's grab lunch sometime."
Formal: [Model generates formal version]
```

## Best Practices for Few-Shot Learning

### 1. Use Consistent Formatting

**Good**:
```
Q: What is 2 + 2?
A: 4

Q: What is 5 + 3?
A: 8

Q: What is 7 + 1?
A:
```

**Bad** (inconsistent):
```
Question: What is 2 + 2?
Answer: 4

Q: What is 5 + 3?
A: 8

What is 7 + 1? →
```

### 2. Provide Representative Examples

Cover different types of cases:
- Simple cases
- Complex cases
- Edge cases
- Different categories (if applicable)

**Example for sentiment analysis**:
```
# Simple positive
Text: "Great!"
Sentiment: Positive

# Complex positive
Text: "While it has minor issues, overall it's fantastic."
Sentiment: Positive

# Simple negative
Text: "Terrible."
Sentiment: Negative

# Neutral with mixed signals
Text: "It works, but nothing impressive."
Sentiment: Neutral
```

### 3. Order Matters

The model pays attention to:
- The sequence of examples
- Recent examples (more weight)
- Patterns across examples

**Tip**: Put your best, clearest examples first.

### 4. Quality Over Quantity

- **2-5 examples** often sufficient
- More examples ≠ always better
- Clear examples > many examples

### 5. Show, Don't Just Tell

**Less effective** (telling):
```
Translate to French. Make sure to use formal language.

Hello → [...]
```

**More effective** (showing):
```
English: Hello, sir.
French: Bonjour, monsieur.

English: How are you, madam?
French: Comment allez-vous, madame?

English: Good evening, everyone.
French: [Model follows formal pattern]
```

## Advanced Few-Shot Techniques

### Chain-of-Thought Few-Shot

Show the reasoning process in your examples:

```
Q: If John has 5 apples and gives 2 to Mary, how many does he have left?
A: John starts with 5 apples. He gives away 2 apples. 5 - 2 = 3.
   John has 3 apples left.

Q: If Sarah has 10 cookies and eats 3, how many does she have left?
A: Sarah starts with 10 cookies. She eats 3 cookies. 10 - 3 = 7.
   Sarah has 7 cookies left.

Q: If Mike has 8 pencils and loses 4, how many does he have left?
A: [Model shows reasoning process]
```

### Multi-Step Few-Shot

Show multiple steps in the process:

```
Task: Extract key information and summarize

Document: "Apple Inc. reported Q3 revenue of $81.8B, up 2% YoY.
          iPhone sales were $39.7B."

Step 1 - Key Info: Company: Apple Inc., Period: Q3, Revenue: $81.8B,
                   Growth: 2% YoY, iPhone: $39.7B
Step 2 - Summary: Apple Q3 revenue grew 2% to $81.8B, driven by
                  $39.7B iPhone sales.

Document: [New document]
Step 1 - Key Info: [Model extracts]
Step 2 - Summary: [Model summarizes]
```

## Common Pitfalls

### 1. Inconsistent Examples

```
# Bad - Different formats
Input: "Good product" → Positive
"Bad service" = Negative
Review: "Okay" | Label: Neutral
```

Choose one format and stick with it.

### 2. Biased Examples

```
# Bad - All positive
Review: "Great!" → Positive
Review: "Excellent!" → Positive
Review: "Amazing!" → Positive
Review: "I hate it" → [Model might be biased toward positive]
```

Include balanced examples.

### 3. Conflicting Examples

```
# Bad - Contradictory
Text: "It's fine" → Positive
Text: "It's okay" → Negative  # Confusing - similar to above
Text: "It's acceptable" → [Model is confused]
```

Ensure examples are consistent.

### 4. Too Many Examples

**Problem**: Wastes tokens, might confuse the model

**Solution**: Start with 2-3 examples, add more only if needed

## Practical Exercise: Create Your Own

### Task 1: Sentiment Analysis
Create a few-shot prompt to classify movie reviews as positive, negative, or neutral.

### Task 2: Code Comment Generation
Create a few-shot prompt that generates comments for code snippets.

Example structure:
```
Code: [snippet]
Comment: [explanation]

Code: [snippet]
Comment: [explanation]

Code: [new snippet]
Comment: [your prompt should generate this]
```

### Task 3: Data Extraction
Create a few-shot prompt to extract structured data from unstructured text.

### Task 4: Custom Format
Design your own few-shot task relevant to your work or interests.

## Success Criteria Checkpoint

Can you create a prompt that successfully uses few-shot learning?

### Criteria for Success:
- ✓ Consistent formatting across examples
- ✓ 2-5 clear, representative examples
- ✓ Demonstrates the desired pattern
- ✓ Includes a new input for the model to complete
- ✓ Produces correct output matching the pattern

### Your Assignment:
Create **one excellent few-shot prompt** that:
1. Solves a real problem you have
2. Uses 3-4 examples
3. Produces consistent, useful outputs
4. Could be used in a real project

## Testing Your Few-Shot Prompts

### Evaluation Checklist:
1. Does it work on the first try?
2. Does it produce consistent results?
3. Does it handle edge cases?
4. Is the format exactly what you want?
5. Could someone else understand the pattern?

## When to Use Few-Shot Learning

### Good Use Cases:
- ✓ Custom formats or styles
- ✓ Domain-specific tasks
- ✓ Complex patterns
- ✓ Specific output structures
- ✓ When zero-shot fails

### When Zero-Shot Might Be Better:
- Simple, common tasks
- Standard formats
- When examples are hard to create
- Token budget is limited

## Key Takeaways

1. **Few-shot learning teaches through examples** rather than instructions
2. **Consistency is crucial** - keep formatting uniform
3. **2-5 examples usually sufficient** - quality over quantity
4. **Show the pattern you want** - the model will follow it
5. **Test and iterate** - refine based on results
6. **Balance is important** - cover different cases
7. **Order matters** - put best examples first

## Next Steps

Now that you understand few-shot learning:
- Review [05-ai-limitations.md](./05-ai-limitations.md) to understand constraints
- Explore [06-code-prompt-patterns.md](./06-code-prompt-patterns.md) for code-specific techniques
- Practice creating few-shot prompts for your own use cases
