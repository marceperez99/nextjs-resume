---
title: 'Working with React Native'
date: 'April 08, 2021'
---
<img src="https://www.asapdevelopers.com/wp-content/uploads/2017/11/react-native-banner-1024x300-e1510060053599-1.png" alt="drawing"  />
Starting on Mobile Development can be a bit of a mess, due to the fact
that you have two mayor Operative Systems very different from each other, with
different style guidelines, and a totally different set of development tools, on 
one side you have Android where you have to use Kotlin or Java, and then you have iOS
where you have to use with Swift.

&nbsp;

It is no doubt that a Hybrid Platforms, would be such an attractive alternative 
for building apps and not having to learn two different languages and maintain two different
codebases. This is where React Native comes in as a great tool if you want to use Javascript
to build with a single codebase an app for both Android and iOS.

&nbsp;

React Native offers you a way to write an app using React. The main difference with other
tools is that the components rendered by React Native are native components of the corresponding
operative system, making it much faster that other alternatives such as Ionic that just render
HTML inside a WebView. This is done by running the app in two threads, one that runs the Javascript
code, and the other Native thread that renders the corresponding components on screen, the Javascript
thread sends messages to the Native thread through a bridge, so it can update the screen based on the React code.

&nbsp;

In my experience using React Native, in particular Expo  with it's Managed Workflow, 
abstracts you all the details of managing both the Android and iOS native projects, making it 
quite easy to go into mobile development, and it's even easier if you are coming  from the React world.
Generating build to release your app is quite easy too, if you are using a Managed Workflow you can
let Expo manage all the build process, even though you'll have to wait some time while your app gets
compiled on Expo Servers.

&nbsp;

But not everything is as pretty as it seems, React Native can sometimes suffer performance-wise, 
the bridge between both threads can become a bottleneck in the app, leaving you with laggy transitions.
There are some functionalities too that do not ship with React Native out-of-the-box that might
require you to write your own native code, so you might have to eventually write some Kotlin or Swift.
