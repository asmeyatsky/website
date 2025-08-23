#!/bin/bash

# Helper script to set up remote GitHub repository
# Usage: ./setup-remote.sh https://github.com/username/repository.git

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${PURPLE}🔗 Setting up remote GitHub repository...${NC}"

# Check if URL is provided
if [ $# -eq 0 ]; then
    echo -e "${YELLOW}💡 Usage: ./setup-remote.sh <github-repo-url>${NC}"
    echo "Example: ./setup-remote.sh https://github.com/username/ai-website.git"
    echo ""
    echo "Or you can run the commands manually:"
    echo "  git remote add origin https://github.com/username/repository.git"
    echo "  git branch -M main" 
    echo "  git push -u origin main"
    echo ""
    exit 1
fi

REPO_URL="$1"

echo -e "${BLUE}🌐 Repository URL: $REPO_URL${NC}"

# Validate GitHub URL format
if [[ ! "$REPO_URL" =~ ^https://github\.com/.+/.+\.git$ ]]; then
    echo -e "${RED}❌ Invalid GitHub URL format!${NC}"
    echo "Expected format: https://github.com/username/repository.git"
    exit 1
fi

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo -e "${YELLOW}⚠️  Remote origin already exists:${NC}"
    echo "   $(git remote get-url origin)"
    echo ""
    read -p "Do you want to update it? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote set-url origin "$REPO_URL"
        echo -e "${GREEN}✅ Updated remote origin${NC}"
    else
        echo -e "${YELLOW}Skipped updating remote${NC}"
        exit 0
    fi
else
    # Add remote
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}✅ Added remote origin${NC}"
fi

# Rename branch to main if it's master
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" = "master" ]; then
    echo -e "${BLUE}🔄 Renaming branch from master to main...${NC}"
    git branch -M main
    current_branch="main"
fi

echo -e "${BLUE}📍 Current branch: $current_branch${NC}"

# Check internet connectivity
if ! ping -c 1 github.com &> /dev/null; then
    echo -e "${RED}❌ Cannot reach GitHub. Check your internet connection.${NC}"
    exit 1
fi

# Push to remote
echo -e "${BLUE}🚀 Pushing to remote repository...${NC}"
if git push -u origin "$current_branch"; then
    echo -e "${GREEN}✅ Successfully pushed to remote repository!${NC}"
    
    # Extract repo info for URLs
    repo_path=$(echo "$REPO_URL" | sed -E 's|.*github\.com[:/]([^/]+/[^/]+)(\.git)?.*|\1|')
    echo ""
    echo -e "${PURPLE}🎉 Repository is now live!${NC}"
    echo -e "${BLUE}🔗 Repository URL: https://github.com/$repo_path${NC}"
    echo -e "${BLUE}🌐 Pages URL: https://${repo_path%/*}.github.io/${repo_path#*/} (if enabled)${NC}"
    echo ""
    echo -e "${GREEN}✨ Auto-sync is now enabled!${NC}"
    echo "Future commits will automatically push to remote."
    
else
    echo -e "${RED}❌ Failed to push to remote repository!${NC}"
    echo ""
    echo -e "${YELLOW}💡 Possible solutions:${NC}"
    echo "1. Check if the repository exists on GitHub"
    echo "2. Verify you have push access to the repository"
    echo "3. Ensure you're authenticated with GitHub (SSH keys or token)"
    echo "4. Try: git push -u origin main --force (if you're sure)"
    echo ""
    exit 1
fi

echo ""
echo -e "${GREEN}🎊 Setup completed successfully!${NC}"
echo "Your futuristic AI website is now version controlled and synced!"