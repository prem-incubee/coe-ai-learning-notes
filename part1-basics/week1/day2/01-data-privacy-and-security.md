# Data Privacy and Security

## The Problem

When you use AI tools, you're sharing code with external services. That code gets processed, logged, and potentially used for training. Understanding what's safe to share is critical.

## 5 Major Security Risks

### 1. Data Leakage
Accidentally sharing sensitive info in prompts:
- Database credentials
- API keys and tokens
- Customer data (names, emails, phone numbers)
- Internal system details

**Real case**: Samsung engineers shared proprietary code with ChatGPT. Samsung banned ChatGPT company-wide.

### 2. Vulnerable Code
AI often generates code with security flaws:
- SQL injection
- Weak password hashing (MD5 instead of bcrypt)
- Missing input validation
- Hardcoded secrets

### 3. PII Disclosure
Never share personal data: names, emails, SSNs, addresses, medical records.

**Always sanitize**:
```python
# DON'T: "Fix: SELECT * WHERE email = 'john@acme.com'"
# DO: "Fix: SELECT * WHERE email = 'user@example.com'"
```

### 4. Credential Exposure
Never share: SSH keys, OAuth tokens, passwords, environment variables with secrets.

**If you accidentally share credentials, rotate them immediately.**

### 5. IP Leakage
Your company's proprietary algorithms and unreleased features could be exposed. This violates NDAs and costs competitive advantage.

## Before Using AI: Quick Check

- [ ] Removed all real names, emails, personal info?
- [ ] No passwords, keys, or tokens?
- [ ] Not confidential or proprietary?
- [ ] Allowed to share externally?
- [ ] Will review output for security issues?

## Data Retention

- **ChatGPT**: Keeps conversations 30 days (opt out available)
- **GitHub Copilot**: Individual accounts may train on your code
- **Claude**: No training on conversations by default

Always check your tool's data policy.

## Compliance

If in regulated industries:
- **HIPAA**: Never share patient data
- **GDPR**: Careful with EU citizen data
- **PCI-DSS**: Never share payment data

Violations = massive fines.

## Best Practices

1. Sanitize everything - replace real data with fake examples
2. Review all AI output - never blindly trust it
3. Use security scanners (SonarQube, Snyk)
4. When in doubt, don't share

**Key takeaway**: Treat AI tools like public Twitter. If you wouldn't tweet it, don't put it in a prompt. You're responsible for the code you ship.
