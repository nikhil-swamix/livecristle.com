@echo off
set GitRepoPath="C:\Users\Developer Swamix\Documents\GitHub\frontend_showcase\Fresh Delivery"
robocopy ./ %GitRepoPath%  /mir

cd %GitRepoPath%\..\
set /p msg="Master Nikhil Swami - Please set Commit message for this commit:" + echo.

git add -A
git commit -a -m "%msg%" 
git push