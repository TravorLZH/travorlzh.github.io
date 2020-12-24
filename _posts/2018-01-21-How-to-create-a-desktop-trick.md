---
layout: post
nav: 0
title: How to create a flashing desktop
des: For those people who wanna make tricks
---

![desktop](/assets/images/desktop.png)

My original purpose to code is to hack. So in the path of programming, I created tricks.

For example, flashing desktop which is what I'm going to talk about. I'm going to use my environment `Windows` to create. The programming language I'm going to use is `Windows Batch` with extension `.bat`.

> <b>To Execute A Batch</b> basically means to execute a bunch of command in a file

In order to do it. I use a infinite iteration: terminate the desktop process then launch it and then iterate. After a while of research. I knew the process that is responsible for Desktop is `Windows Explorer` with Image named `explorer.exe`

Then we got the first step: Terminate Process. In `Windows`, we use `taskkill`

> taskkill /f /im \<process name\>

The `/f` switch told the computer to force terminate the process. The `/im` switch told the computer to terminate the processes that match the name. In case it's `explorer.exe`. So, we open the `Command Prompt` and let's enter the following

> taskkill /f /im explorer.exe

Then you can see your computer came into dark.

![darkdesktop](/assets/images/darkdesktop.png)

To recover. Just enter `explorer` or `explorer.exe` on command prompt.

![recovered](/assets/images/recovereddesktop.png)

So, after we knew how to terminate and launch desktop process, we can start to code.

<pre><code>
:label
timeout /nobreak /t 1
taskkill /f /im explorer.exe
timeout /nobreak /t 1
start explorer.exe
goto label

</code></pre>

As you can see. The way to start a process in the batch file is using `start` command. It's because batch works differently from command prompt. In batch, the interpreter waits for the process to terminate and then execute the next command. Using `start` could gracefully avoid this to happen.

At last, save the file with extension `.bat` on your desktop.

Click and enjoy, guys!
