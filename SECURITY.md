# 🔒 Security & Git Hooks

This repository includes comprehensive security measures to protect against accidental commits of sensitive information.

## 🛡️ Pre-commit Security Scanner

### What it checks:
- ✅ **API Keys & Secrets**: Detects API keys, secrets, and tokens
- ✅ **AWS Credentials**: Finds AWS access keys and secret keys
- ✅ **Private Keys**: Scans for SSH/SSL private keys
- ✅ **Passwords**: Identifies hardcoded passwords
- ✅ **Database URLs**: Catches database connection strings
- ✅ **GitHub/Slack Tokens**: Detects service-specific tokens
- ✅ **Suspicious Files**: Blocks .pem, .key, .env files
- ✅ **Code Quality**: Runs linting and type checking

### How it works:
1. Scans all staged files before each commit
2. Blocks commits containing sensitive information
3. Provides helpful error messages and suggestions
4. Runs automatically - no manual intervention needed

## 🚀 Auto-sync Post-commit Hook

### Features:
- ⚡ **Automatic Push**: Pushes commits to remote after successful local commit
- 🌐 **Internet Check**: Verifies connectivity before attempting sync
- 🔄 **Smart Handling**: Manages branch creation and upstream setup
- ⚠️ **Conflict Detection**: Provides guidance when manual intervention needed

## 🛠️ Setup Instructions

### 1. Connect to GitHub Repository

Use the provided setup script:
```bash
./setup-remote.sh https://github.com/yourusername/your-repo.git
```

Or manually:
```bash
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### 2. Verify Hooks

The hooks are automatically active! Try committing a file with sensitive data to test the scanner.

## 🚨 Security Alert Examples

The pre-commit hook will block commits like:
```bash
❌ SECURITY ALERT: API Keys/Secrets found!
   File: config.js
     → 12: const apiKey = '[REDACTED_FOR_SECURITY]'
```

## 💡 Best Practices

### ✅ Do:
- Use environment variables for secrets
- Keep .env files in .gitignore
- Use placeholder values in config examples
- Store credentials in secure key management services

### ❌ Don't:
- Hardcode API keys in source code
- Commit .env files with real secrets
- Include private keys in repository
- Use weak passwords in configuration

## 🔧 Customization

### Adding New Patterns
Edit `.git/hooks/pre-commit` to add new security patterns:
```bash
# Add your custom pattern
check_pattern "your-pattern-here" "Description"
if [ $? -eq 1 ]; then security_issues=1; fi
```

### Disabling Hooks
Temporarily bypass hooks (use with caution):
```bash
git commit --no-verify -m "Emergency commit"
```

## 📊 Security Levels

| Level | Description | Action |
|-------|-------------|--------|
| 🔴 **Critical** | API keys, private keys | **BLOCKS COMMIT** |
| 🟡 **Warning** | Suspicious files, TODO mentions | **ALLOWS WITH WARNING** |
| 🟢 **Info** | Linting issues | **PROCEEDS** |

## 🎯 Why This Matters

- **Prevents data breaches** from leaked credentials
- **Protects API quotas** from unauthorized usage
- **Maintains compliance** with security standards
- **Saves money** by preventing token abuse
- **Builds trust** with secure development practices

## 🆘 Emergency Procedures

If you accidentally commit secrets:
1. **Immediately rotate** the compromised credentials
2. **Force push** a cleaned history (if repository is private)
3. **Contact security team** if credentials were exposed
4. **Review logs** for any unauthorized usage

---

🔐 **Remember**: Security is everyone's responsibility!