# Week 1, Day 1 - Resources

## Official Documentation & Guides

### Anthropic's Prompt Engineering Guide
**URL**: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices

**What it covers**:
- Claude 4.x specific best practices
- General principles for effective prompting
- Advanced techniques (chain-of-thought, few-shot, etc.)
- Long-horizon reasoning and state tracking
- Tool usage patterns
- Context awareness and multi-window workflows
- Specific guidance for different use cases (coding, research, etc.)

**Key takeaways**:
- Be explicit with instructions
- Add context to improve performance
- Be vigilant with examples and details
- Claude 4.5 excels at long-horizon reasoning
- Models have concise, natural communication style
- Parallel tool calling for efficiency

### OpenAI Prompt Engineering Guide
**URL**: https://platform.openai.com/docs/guides/prompt-engineering

**What it covers**:
- Strategies for getting better results
- Six core strategies with tactics
- Writing clear instructions
- Providing reference text
- Splitting complex tasks
- Giving models time to "think"

### Prompt Engineering Guide (Comprehensive)
**URL**: https://www.promptingguide.ai/

**What it covers**:
- Introduction to LLMs and prompt engineering
- LLM settings (temperature, top-p, etc.)
- Prompting techniques (zero-shot, few-shot, chain-of-thought)
- Applications across different domains
- Models overview and comparisons
- Advanced prompting techniques
- Research papers and latest developments

**Why it's valuable**:
- Comprehensive, beginner-friendly resource
- Covers both fundamentals and advanced topics
- Regularly updated with latest research
- Includes practical examples
- Model-agnostic (applies to GPT, Claude, etc.)

## Interactive Experimentation

### OpenAI Playground
**URL**: https://platform.openai.com/playground

**What you can do**:
- Test prompts with different GPT models
- Adjust parameters (temperature, max tokens, etc.)
- See real-time results
- Compare different prompt variations
- Experiment with system messages

### Anthropic Console
**URL**: https://console.anthropic.com/

**What you can do**:
- Test prompts with Claude models
- Access Claude Sonnet, Opus, and Haiku
- Experiment with different settings
- Build and test AI applications
- Access API documentation

## Video Content

### A Hacker's Guide to Language Models by Jeremy Howard
**URL**: https://www.youtube.com/watch?v=jkrNMKz9pWU

**Duration**: ~90 minutes

**Overview**:
A comprehensive, code-first approach to understanding and utilizing language models.

**Key Topics Covered**:

#### 1. What are Language Models? (0:00 - 6:38)
- Definition: Systems that predict the next word or fill in missing words
- Examples using OpenAI's text-Davinci-003
- Concept of tokens explained

#### 2. The ULMFiT Approach (6:38 - 16:02)
Jeremy Howard explains the three-step approach he co-created in 2017:

**Step 1: Language Model Pre-training** (7:01)
- Training on vast datasets like Wikipedia
- Learning about the world by predicting the next word

**Step 2: Language Model Fine-tuning / Instruction Tuning** (11:55)
- Training on specific datasets to solve problems
- Teaching the model to answer questions

**Step 3: Classifier Fine-tuning / RLHF** (14:51)
- Humans or advanced models select preferred answers
- Refinement through feedback

**Important concept** (11:14):
> "Language models are a form of compression and intelligence"

#### 3. GPT-4 Capabilities and Limitations (16:02 - 31:28)

**Challenging Misconceptions** (17:10):
- Howard demonstrates GPT-4's problem-solving abilities
- Shows examples that many claim GPT-4 cannot handle
- Proves models can reason contrary to popular belief

**Training and Quality** (22:06):
- Training doesn't always prioritize factual correctness
- Users can prime GPT-4 with custom instructions
- How to encourage higher-quality outputs

**What GPT-4 Cannot Do** (26:02):
- Access real-time web content beyond knowledge cut-off (Sept 2021)
- Can get stuck in incorrect reasoning loops if not corrected
- Needs proper prompting to avoid persistent errors

#### 4. Practical Applications (31:28 - 46:36)

**Advanced Data Analysis** (31:28):
- Using Code Interpreter for writing and testing code
- Practical demonstrations

**Optical Character Recognition (OCR)** (33:56):
- Extracting text from images
- Use cases and examples

**Data Extraction and Summarization** (36:05):
- Processing web pages
- Extracting structured information from unstructured text

**Using the OpenAI API** (38:50):
- Cost structure of different models (37:50)
- GPT-4 vs GPT-3.5 Turbo pricing
- Programmatic usage for specific tasks (41:57)
- Handling rate limits

#### 5. Advanced Topics: Function Calling (46:36+)

**Creating a Code Interpreter** (46:36):
- Using function calling with OpenAI's API
- Defining tools and functions
- Importance of clear function descriptions (47:10)
- Using docstrings effectively

**Key Insight**:
The language model uses function descriptions to understand when and how to call functions, making documentation critical.

## Additional Learning Resources

### Token Counters
- **OpenAI Tokenizer**: https://platform.openai.com/tokenizer
- **Anthropic Console**: Built-in token counting

**Use these to**:
- Understand how text is tokenized
- Estimate API costs
- Practice token-efficient prompting

### Community Resources
- **r/PromptEngineering** (Reddit): Community discussions and examples
- **Anthropic Cookbook**: https://github.com/anthropics/anthropic-cookbook
- **OpenAI Cookbook**: https://github.com/openai/openai-cookbook

### Research Papers (Optional Deep Dive)
- "Attention Is All You Need" (Transformers paper)
- "Language Models are Few-Shot Learners" (GPT-3 paper)
- "Constitutional AI" (Anthropic's alignment approach)

## Practical Tools

### For Experimentation
1. **ChatGPT**: https://chat.openai.com
2. **Claude**: https://claude.ai
3. **Perplexity AI**: https://www.perplexity.ai
4. **Google Bard/Gemini**: https://gemini.google.com

### For Development
1. **OpenAI Python Library**: `pip install openai`
2. **Anthropic Python SDK**: `pip install anthropic`
3. **LangChain**: Framework for LLM applications
4. **LlamaIndex**: Data framework for LLM applications

## How to Use These Resources

### Day 1 Recommended Approach

**Morning (2-3 hours)**:
1. Read Anthropic's Prompt Engineering Guide (30 min)
2. Watch first half of Jeremy Howard's video (45 min)
3. Read promptingguide.ai introduction sections (30 min)
4. Take notes on key concepts (30 min)

**Afternoon (2-3 hours)**:
1. Watch second half of Jeremy Howard's video (45 min)
2. Experiment in OpenAI Playground or Anthropic Console (60 min)
3. Complete the 10 progressive prompts exercise (45 min)
4. Document learnings (30 min)

**Evening (1-2 hours)**:
1. Review all notes
2. Test few-shot learning examples
3. Identify 3 AI limitations with examples
4. Document 3 code prompt patterns

### Tips for Effective Learning

**Active Learning**:
- Don't just read - try examples immediately
- Modify examples to see what changes
- Break things to understand boundaries

**Documentation**:
- Keep a prompt journal
- Note what works and what doesn't
- Build a personal prompt library

**Experimentation**:
- Test the same prompt with different models
- Try various temperature settings
- Compare zero-shot vs few-shot approaches

**Community**:
- Share your findings
- Learn from others' examples
- Ask questions when stuck

## Success Checklist

By the end of Day 1, you should have:

- [ ] Read Anthropic's Prompt Engineering Guide
- [ ] Watched Jeremy Howard's video (or at least key sections)
- [ ] Explored promptingguide.ai fundamentals
- [ ] Experimented in OpenAI Playground or Anthropic Console
- [ ] Written 10 progressively better prompts
- [ ] Created at least one successful few-shot prompt
- [ ] Documented 3 AI limitations with examples
- [ ] Identified 3 code prompt patterns that work
- [ ] Understood tokens and context windows
- [ ] Tested different temperature and parameter settings

## Quick Reference

### Key Concepts to Master
1. What LLMs are and how they work
2. Tokens and tokenization
3. Context windows and limits
4. Zero-shot vs few-shot prompting
5. Temperature and other parameters
6. AI limitations and when not to trust LLMs
7. Effective prompt patterns for code

### Prompt Engineering Principles
1. Be explicit with instructions
2. Provide context and motivation
3. Use examples to demonstrate patterns
4. Tell models what TO do, not what NOT to do
5. Match prompt style to desired output
6. Iterate and refine
7. Test and verify outputs

### When to Use What

**Zero-shot**: Simple, common tasks
**Few-shot**: Custom formats, complex patterns
**Chain-of-thought**: Reasoning tasks, debugging
**Low temperature**: Factual, consistent outputs
**High temperature**: Creative, diverse outputs

## Next Steps After Day 1

1. **Review** your notes and consolidate learnings
2. **Practice** with real tasks from your work
3. **Experiment** with different models and compare
4. **Build** a personal prompt library
5. **Prepare** for Day 2 content

## Questions to Reflect On

- What surprised you most about how LLMs work?
- Which prompt pattern felt most useful for your needs?
- What limitations concern you most for your use cases?
- How can you apply prompt engineering in your daily work?
- What do you want to explore deeper in coming days?

## Getting Help

If you get stuck:
1. Review the guide sections again
2. Try simpler examples first
3. Experiment with different phrasings
4. Check the community resources
5. Test with different models
6. Document what doesn't work (as valuable as what does!)

---

## Notes Section

Use this space to add your own notes, findings, and resources:

### My Key Learnings:
[Your notes here]

### Interesting Prompts I Discovered:
[Your prompts here]

### Questions for Further Exploration:
[Your questions here]

### Resources I Want to Explore Next:
[Your additional resources here]
