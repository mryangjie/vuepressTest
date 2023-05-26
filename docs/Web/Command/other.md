### git常用命令

```js
git config -l 查看git环境的详细配置
git config --global user.name 'yangjie' 名称
git config --global user.email '914569804@qq.com' 邮箱
git branch //查看本地分支
git branch -a //查看本地和远程分支
git branch -D branchName //删除本地分支
git checkout -b branchName //切换新建分支
git push origin --delete BranchName //删除远程分支
git checkout branchName //切换分支
git checkout -t origin/branch //切换到远程分支branch 并自动切换到该分支 本地命名不变
git checkout -b branchA origin/branchB //切换远程分支B 并自动切换到该分支 本地命名分支A
git push --set-upstream origin branch //提交远程分支
git reset --hard xxx //回退到某个版本
git push -f //远程分支强制回退
git commit --amend修改还未提交的最后一次注释

git diff b1 b2 --stat //两分支所有差异列表文件 --stat显示列表
git diff b1 b2 fileName //两分支指定文件差异
git fetch origin develop:develop  
git merge origin/develop //当前分支拉远程其他分支 并合并
```

