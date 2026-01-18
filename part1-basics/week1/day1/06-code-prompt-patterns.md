# Code Prompt Patterns: Effective Patterns for Programming Tasks

## Why Code Prompts Are Different

Code requires:
- **Precision** - Small errors break everything
- **Context** - Understanding the codebase, language, framework
- **Structure** - Proper syntax, indentation, organization
- **Testing** - Verification that code works
- **Best practices** - Following conventions and patterns

## Success Criteria: Document 3 Effective Patterns

This guide presents **3 core patterns** plus additional techniques for code-related tasks.

---

## Pattern 1: The "Expert Context + Constraints" Pattern

### Structure

```
You are an expert [language/framework] developer.

Context:
[Project details, tech stack, relevant constraints]

Task:
[Specific coding task]

Requirements:
[Detailed requirements and constraints]

Style:
[Code style preferences]
```

### When to Use

- Complex code generation
- When specific conventions matter
- Working within a particular framework
- Need consistency with existing codebase

### Example 1: React Component

```
You are an expert React developer working with TypeScript and Tailwind CSS.

Context:
- React 18 with functional components and hooks
- TypeScript with strict mode enabled
- Tailwind CSS for styling
- Project uses ESLint with Airbnb config

Task:
Create a reusable Card component for displaying user profiles.

Requirements:
- Accept name, avatar URL, bio, and social links as props
- Use TypeScript for prop typing
- Make it responsive (mobile-first)
- Include hover effects
- Follow existing component patterns in the codebase
- Include proper accessibility attributes

Style:
- Use functional components with TypeScript
- Prefer const over function keyword
- Use descriptive variable names
- Include JSDoc comments for the component
```

### Example 2: Python API Endpoint

```
You are an expert Python developer working with FastAPI.

Context:
- FastAPI backend with PostgreSQL database
- Using SQLAlchemy for ORM
- Pydantic for validation
- Project follows RESTful API conventions

Task:
Create an endpoint to update user profile information.

Requirements:
- PUT endpoint at /users/{user_id}
- Validate incoming data with Pydantic
- Handle database errors gracefully
- Return appropriate HTTP status codes
- Include authentication check
- Log all updates for audit purposes

Style:
- Follow PEP 8 style guide
- Use type hints
- Include docstrings
- Handle errors with custom exceptions
```

### Why This Pattern Works

- Sets expertise level and domain
- Provides necessary context
- Clearly defines requirements
- Specifies style preferences
- Reduces back-and-forth clarifications

---

## Pattern 2: The "Show Me Your Work" (Chain-of-Thought) Pattern

### Structure

```
Task: [Coding task]

Before writing code, please:
1. Explain your approach
2. Identify potential challenges
3. Outline the solution structure

Then provide the implementation.
```

### When to Use

- Complex algorithms
- Debugging
- Architectural decisions
- Learning purposes
- When you need to understand the reasoning

### Example 1: Algorithm Design

```
Task: Implement a function to find the longest palindromic substring in a string.

Before writing code, please:
1. Explain your approach and time/space complexity
2. Identify edge cases
3. Outline the solution structure

Then provide the implementation in Python with comments.
```

**Expected Response Pattern**:
```
Approach:
I'll use the expand-around-center technique because...
Time complexity: O(n²), Space complexity: O(1)

Edge Cases:
- Empty string
- Single character
- Entire string is palindrome
- No palindrome longer than 1 character

Structure:
1. Helper function to expand around center
2. Main function to iterate through possible centers
3. Track longest palindrome found

Implementation:
[Code with comments explaining each step]
```

### Example 2: Debugging

```
This code has a bug. Before fixing it, please:
1. Identify what the bug is
2. Explain why it's happening
3. Describe your fix strategy

Then provide the corrected code.

[Buggy code here]
```

### Why This Pattern Works

- Catches errors in reasoning before code generation
- Helps you learn the approach
- Makes it easier to verify correctness
- Provides documentation of the thought process
- Enables catching issues early

---

## Pattern 3: The "Complete Context" Pattern

### Structure

```
I'm working on [project description].

Here's the relevant code:
[Existing code]

Here's what I'm trying to do:
[Goal]

Here's what I've tried:
[Attempts and errors]

Please provide [specific request].
```

### When to Use

- Debugging existing code
- Adding features to existing codebase
- When context is crucial
- Following existing patterns

### Example 1: Debugging

```
I'm working on a Node.js Express API for a todo app.

Here's the relevant code:
```javascript
app.post('/todos', async (req, res) => {
  const { title, description } = req.body;
  const todo = await Todo.create({ title, description });
  res.json(todo);
});
```

Here's what I'm trying to do:
Add validation so title is required and at least 3 characters.

Here's what I've tried:
I added a validation middleware but it's not catching errors before
the database query, causing database errors instead.

Please provide a solution that validates before the database query
and returns appropriate error messages.
```

### Example 2: Feature Addition

```
I'm working on a React app with a user dashboard.

Here's the relevant code:
```jsx
function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return <div>{users.map(user => <UserCard key={user.id} user={user} />)}</div>;
}
```

Here's what I'm trying to do:
Add search functionality to filter users by name.

Here's what I've tried:
Added a search input but the filtering causes the component to re-fetch
users on every keystroke.

Please provide an efficient solution that filters locally without
refetching data.
```

### Why This Pattern Works

- Provides full context for accurate solutions
- Shows what you've tried (avoids repeated suggestions)
- Demonstrates existing code style
- Makes it clear what success looks like
- Helps model understand constraints

---

## Additional Effective Code Patterns

Beyond the three core patterns, here are five more patterns that work well for specific scenarios.

### Pattern 4: The "Specification First" Pattern

**When to use**: Well-defined problems where you know exactly what inputs and outputs should be

**Template Structure**:
```text
Write a function that:
- Input: [data type and format]
- Output: [data type and format]
- Behavior: [what it does]
- Edge cases: [how to handle special cases]
- Language: [programming language]

Example:
Input: [example input]
Output: [example output]
```

**Real Example**:
```text
Write a function that:
- Input: Array of integers and a target sum (number)
- Output: Array of two indices whose values sum to target
- Behavior: Find two numbers in the array that add up to the target
- Edge cases: Return empty array if no solution exists
- Language: JavaScript (ES6+)

Example:
Input: [1, 2, 3, 4, 5], target: 7
Output: [2, 4] (because array[2] + array[4] = 3 + 5 = 7)
```

**Why it works**: Provides complete specifications upfront, reducing ambiguity

---

### Pattern 5: The "Test-Driven" Pattern

**When to use**: When you want to ensure correctness and have specific test cases in mind

**Template Structure**:
```text
I need a function that [description].

Here are the test cases it should pass:
- Input: [test 1 input], Expected Output: [test 1 output]
- Input: [test 2 input], Expected Output: [test 2 output]
- Input: [test 3 input], Expected Output: [test 3 output]

Please implement the function and verify it passes these tests.
```

**Real Example**:
```text
I need a function that checks if a string is a valid palindrome.

Here are the test cases it should pass:
- Input: "racecar", Expected Output: true
- Input: "hello", Expected Output: false
- Input: "A man a plan a canal Panama", Expected Output: true (ignore spaces and case)
- Input: "", Expected Output: true (empty string is palindrome)
- Input: "a", Expected Output: true

Please implement the function in Python and verify it passes these tests.
```

**Why it works**: Forces the model to focus on correctness and handle edge cases

---

### Pattern 6: The "Refactoring" Pattern

**When to use**: Improving existing code without changing functionality

**Template Structure**:
```text
Refactor this code to [improvement goal]:

[Current code]

Focus on:
- [Specific improvement 1]
- [Specific improvement 2]
- [Specific improvement 3]

Maintain the same functionality and API.
```

**Real Example**:
```text
Refactor this code to improve readability and performance:

function getUserData(users) {
  var result = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
      result.push(users[i].name);
    }
  }
  return result;
}

Focus on:
- Use modern JavaScript (const/let, arrow functions)
- Make it more functional (use array methods)
- Add type safety with JSDoc comments

Maintain the same functionality and API.
```

**Why it works**: Provides clear refactoring goals while preserving behavior

---

### Pattern 7: The "Documentation Request" Pattern

**When to use**: Understanding unfamiliar or complex code

**Template Structure**:
```text
Explain this code:
[Code snippet]

Please provide:
1. High-level overview of what it does
2. Explanation of each major section
3. Time/space complexity analysis
4. Potential issues or improvements
```

**Real Example**:
```text
Explain this code:

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

Please provide:
1. High-level overview of what it does
2. Explanation of each major section
3. Time/space complexity analysis
4. Potential issues or improvements
```

**Why it works**: Structured questions ensure comprehensive explanations

---

### Pattern 8: The "Code Review" Pattern

**When to use**: Getting feedback on code quality and potential issues

**Template Structure**:
```text
Review this code for:
- Bugs and errors
- Performance issues
- Security vulnerabilities
- Best practice violations
- Code style and readability

[Code to review]

Provide specific suggestions for improvement.
```

**Real Example**:
```text
Review this code for:
- Bugs and errors
- Performance issues
- Security vulnerabilities
- Best practice violations
- Code style and readability

app.post('/login', (req, res) => {
  const query = `SELECT * FROM users WHERE username='${req.body.username}'
                 AND password='${req.body.password}'`;
  db.query(query, (err, results) => {
    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.json({ success: false });
    }
  });
});

Provide specific suggestions for improvement.
```

**Why it works**: Comprehensive checklist catches multiple types of issues

---

## Best Practices for Code Prompts

### 1. Be Specific About the Language and Version

**Vague**:
```text
Write a function to sort an array
```

**Specific**:
```text
Write a JavaScript (ES6+) function to sort an array of objects
by a specified property.
```

**Impact**: Specificity reduces ambiguity and ensures you get code in the right language/version.

---

### 2. Provide Examples

**Without example**:
```text
Create a function to format dates
```

**With example**:
```text
Create a function to format dates.

Example:
Input: new Date('2024-03-15')
Output: "March 15, 2024"

Input: new Date('2024-01-01')
Output: "January 1, 2024"
```

**Impact**: Examples clarify the exact format and behavior you expect.

---

### 3. Specify Error Handling

```text
Include error handling for:
- Invalid input types
- Empty arrays
- Null values
- Out of bounds indices
```

**Impact**: Prevents the model from generating code that breaks on edge cases.

---

### 4. Request Tests or Verification

```text
Include unit tests using [testing framework] to verify:
- Basic functionality
- Edge cases
- Error handling
```

**Impact**: Ensures the code is correct and handles all scenarios.

---

### 5. Clarify Code Style

```text
Follow these style guidelines:
- Use camelCase for variables
- Maximum line length: 80 characters
- Prefer const/let over var
- Include JSDoc comments
```

**Impact**: Generated code matches your project's style and conventions.

---

### 6. Mention Performance Requirements

```text
Requirements:
- Must handle arrays up to 100,000 elements
- Should complete in under 100ms
- Memory usage should be O(1) if possible
```

**Impact**: Guides the model toward efficient algorithms and data structures.

---

## Common Pitfalls and How to Avoid Them

### Pitfall 1: Vague Requirements

**Problem** (Too vague):
```text
Write code to process data
```

**Why it's a problem**: No information about language, data format, or desired processing

**Solution** (Specific):
```text
Write a Python function to process a CSV file:
- Input: CSV file path with columns: name, age, email
- Output: Dictionary with valid entries (age > 0, valid email format)
- Filter out invalid entries
- Handle file not found errors
```

**Result**: Clear, actionable requirements that produce usable code

---

### Pitfall 2: No Context About Existing Code

**Problem** (Missing context):
```text
Add authentication to this endpoint
[Shows endpoint only]
```

**Why it's a problem**: Model doesn't know your auth system, conventions, or patterns

**Solution** (With context):
```text
Add authentication to this endpoint. We're using JWT tokens
with the existing AuthService class. Other endpoints use the
@authenticate decorator. Please follow the same pattern.
[Shows endpoint + example of existing auth pattern]
```

**Result**: Consistent code that follows your project's patterns

---

### Pitfall 3: Ignoring Constraints

**Problem** (No constraints):
```text
Make this code faster
```

**Why it's a problem**: Model doesn't know current performance or targets

**Solution** (With constraints):
```text
Optimize this code for speed. Current runtime is 5 seconds for
1000 items. Target is under 1 second. Memory usage is not a
constraint. Can modify data structures if needed.
```

**Result**: Optimization focused on your actual bottleneck with acceptable tradeoffs

---

## Practical Exercise: Create Your Own

### Exercise 1: Use Pattern 1
Write a prompt using the "Expert Context + Constraints" pattern for a coding task in your domain.

### Exercise 2: Use Pattern 2
Write a prompt using the "Show Me Your Work" pattern for an algorithm problem.

### Exercise 3: Use Pattern 3
Write a prompt using the "Complete Context" pattern for debugging actual code you're working on.

## Success Criteria Checkpoint

**Document 3 prompt patterns that work well for code-related tasks.**

Write down:

### Your Pattern 1: [Name]
- **When to use**: [Scenarios]
- **Structure**: [Template]
- **Example**: [Real example from your work]
- **Why it works**: [Explanation]

### Your Pattern 2: [Name]
- **When to use**: [Scenarios]
- **Structure**: [Template]
- **Example**: [Real example from your work]
- **Why it works**: [Explanation]

### Your Pattern 3: [Name]
- **When to use**: [Scenarios]
- **Structure**: [Template]
- **Example**: [Real example from your work]
- **Why it works**: [Explanation]

## Integration with Other Techniques

Combine patterns with other prompt engineering techniques for even better results.

### Combine with Few-Shot Learning

**When to use**: Teaching the model your specific coding style or conventions

**Example**:
```text
You are an expert Python developer.

Here are examples of our coding style:

Example 1:
def calculate_total(items: List[Item]) -> float:
    """Calculate total price with error handling."""
    return sum(item.price for item in items if item.price > 0)

Example 2:
def validate_user(user_data: dict) -> ValidationResult:
    """Validate user data and return detailed result."""
    errors = []
    if not user_data.get('email'):
        errors.append('Email is required')
    return ValidationResult(valid=len(errors) == 0, errors=errors)

Now write a similar function for: process_order(order: Order) -> ProcessResult
```

**Benefit**: Model learns your style from examples rather than descriptions

---

### Combine with Chain-of-Thought

**When to use**: Complex problems requiring step-by-step reasoning

**Example**:
```text
Task: Implement a rate limiter for an API

Please:
1. Break down the problem (what do we need to track?)
2. Identify sub-tasks (storage, checking, cleanup)
3. Explain your approach for each (algorithm, data structures)
4. Implement step by step (with explanations)
5. Test and verify (include test cases)
```

**Benefit**: Catches logical errors early and produces documented code

---

## Advanced: Prompts for Code Generation Tools

### For GitHub Copilot / Code Assistants

Use **detailed comments** as inline prompts:

```python
# Function to validate email address using regex
# Should check for:
#   - @ symbol present
#   - Valid domain after @
#   - Proper format (user@domain.com)
#   - Common edge cases (multiple @, spaces, etc.)
# Returns True if valid, False otherwise
# Raises ValueError if input is None
def validate_email(email: str) -> bool:
    # [Copilot generates implementation]
```

**Tip**: More detailed comments → better code suggestions

---

### For Full Code Generation

Provide **complete specifications** with all requirements:

```text
Generate a complete REST API for a blog system with:

Features:
- Posts (CRUD operations with pagination)
- Comments (nested under posts, max depth 3)
- Users (JWT authentication required for write operations)
- Tags (many-to-many relationship with posts)

Tech Stack:
- FastAPI framework
- PostgreSQL database
- SQLAlchemy ORM
- Pydantic for validation

Requirements:
- Include database models with relationships
- Create API routes with proper HTTP methods
- Implement Pydantic schemas for validation
- Add error handling with appropriate status codes
- Include docstrings for all endpoints
- Follow RESTful conventions

Please generate:
1. models.py (database models)
2. schemas.py (Pydantic models)
3. routes.py (API endpoints)
4. main.py (app setup)
```

**Result**: Complete, production-ready API structure

---

## Key Takeaways

1. **Pattern 1 (Expert Context + Constraints)** provides full context and requirements
2. **Pattern 2 (Show Me Your Work)** reveals reasoning before code
3. **Pattern 3 (Complete Context)** gives existing code and history
4. **Be specific** about language, version, requirements
5. **Provide examples** of inputs and outputs
6. **Include constraints** like performance, style, error handling
7. **Request tests** to verify correctness
8. **Iterate** based on results
9. **Combine patterns** for complex tasks
10. **Adapt patterns** to your specific needs

## Next Steps

- Practice each pattern with real coding tasks
- Document which patterns work best for which scenarios
- Refine patterns based on results
- Share successful patterns with your team
- Review [resources.md](./resources.md) for additional learning materials

## Final Assignment

Create three different prompts using the three core patterns:
1. One using Pattern 1 for a new feature
2. One using Pattern 2 for an algorithm
3. One using Pattern 3 for debugging

Test each prompt and document:
- The prompt you used
- The output you received
- How well it worked
- What you would improve
