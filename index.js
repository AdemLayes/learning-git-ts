function myFun() {
  let para = document.getElementById('para');
  let paraValue = para.innerHTML
  if(paraValue == "this is lovely!") {
    para.innerHTML = "Changed"
  }else{
    para.innerHTML = "this is lovely!"
  }
}
/*

Git commends i learned so far:

- git config --global user.name 'name'
  git config --global user.email 'email'
- git init
  git init 'repo name'
- git status
- git log
- git touch 'file name'
- git cd 'derectory'
- ls
  ls -a
- git branch
  git branch 'branch name'
- git checkout 'branch name or master'
- git add 'file name'
  git add .
  git add *.html
- git commit -m "message"
- git rm --cached 'file name'
- git merge 'branch name'
- git remote -v
  git remote add 'remote branch name' 'url(from gitHub)'
- git push -u 'remote branch name' 'branch name / master name'
- git pull 'remote branch name' 'branch name / master name'
*/
// this is just a comment
// boga boga baby!
