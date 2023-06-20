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
*/