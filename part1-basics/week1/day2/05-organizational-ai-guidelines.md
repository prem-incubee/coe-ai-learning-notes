# Creating AI Usage Guidelines

## Why Your Team Needs Guidelines

Without clear rules:
- Security breaches (accidentally sharing secrets)
- License violations (GPL contamination)
- Skill degradation (over-reliance)
- Inconsistent practices
- Legal liability

With guidelines:
- Everyone knows what's acceptable
- Reduced risk
- Consistent code quality
- Protected team and company

## Key Components

### 1. What's Allowed

**✅ Yes**:
- Boilerplate code
- Unit tests
- Documentation
- Code explanations

**⚠️ Review required**:
- Business logic
- Database queries

**❌ No**:
- Security code (auth, crypto)
- PII in prompts
- Production credentials
- Compliance features

### 2. Data Privacy

**Never share**:
- Customer PII
- API keys, passwords
- Production data
- Proprietary code

**Always sanitize**: Use example.com, user@example.com

### 3. Code Review

All AI code must:
- Be understood by developer
- Pass peer review
- Include tests
- Pass security scans

**If you can't explain it, don't merge it.**

### 4. Security & Compliance

- Run static analysis
- Scan for vulnerabilities
- Check for license issues
- Document AI usage in commits

### 5. Incident Reporting

If you share sensitive data:
1. Stop using the tool
2. Report immediately
3. Document what was shared
4. Follow response plan

## Sample Template

```markdown
# [Team] AI Guidelines

## Approved Tools
- GitHub Copilot Business
- ChatGPT Team

## When to Use AI
✅ Boilerplate, tests, docs
❌ Security, PII, production data

## Data Privacy
Never share: credentials, customer data, proprietary code
Always use: example.com for domains

## Code Review
All AI code must:
- Be understood
- Pass review
- Include tests

## Report Issues To
[security@company.com]
```

## By Experience Level

**Juniors**:
- Limit to 20-30% of coding
- Attempt manually first
- Must explain all code

**Seniors**:
- More flexibility
- Mentor juniors
- Maintain code quality

## Implementation

1. **Week 1-2**: Draft guidelines
2. **Week 3-4**: Get security/legal review
3. **Week 5-6**: Train team
4. **Week 7+**: Launch and iterate

## Common Mistakes

1. Too restrictive → People find workarounds
2. Too vague → Nobody knows what to do
3. No enforcement → Guidelines ignored
4. No updates → Becomes outdated
5. Top-down only → Low buy-in

## Key Principles

1. Clear and simple
2. Practical and actionable
3. Balanced (enable + protect)
4. Living document (update regularly)
5. Collaborative (team involvement)
6. Fairly enforced

## Quick AI Use Checklist

Before using AI:
- [ ] Allowed per guidelines?
- [ ] Removed all sensitive data?
- [ ] Will review thoroughly?
- [ ] Can explain the code?
- [ ] Helping me learn or replacing learning?

## Key Takeaways

1. Guidelines prevent problems
2. Balance productivity and risk
3. Involve the team
4. Keep it simple
5. Update regularly
6. Enforce fairly
7. Learn from mistakes

**Remember**: Guidelines should empower safe AI use, not just restrict it. Frame as "how to use responsibly" not "what you can't do."
