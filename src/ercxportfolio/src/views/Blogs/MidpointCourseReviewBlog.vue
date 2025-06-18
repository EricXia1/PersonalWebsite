<script setup>
import BlogTemplate from '@/components/BlogTemplate.vue'

const title = 'Midpoint Course Review'
const date = 'June 17, 2025'
const content = `
<p>
    The first two years of UofT CS have been an absolute rollercoaster so I decided to write some personal anecdotes about some of the courses I took.
</p> 
<b>First Year Courses</b>
<p>
    CSC108 - Fall 2023 UTM
</p>
<ul>
    <li>This course is pedantic.</li>
    <li>In terms of actual difficulty, the hardest thing you'll do in this course is literally selection sort</li>
    <li>The tests specifically were essentially just python trivia and edge case knowledge</li>
    <li>You will get tested on very niche python knowledge which gets obnoxious very fast</li>
    <li>RUSURE incident.</li>
</ul>
<p>
    CSC148 - Winter 2024 UTM
</p>
<ul>
    <li>First real CS course.</li>
    <li>I personally had a lot of fun in this course and found it way better than 108</li>
    <li>We actually got real project assignments and tests that were more theory focused which made them feel more reasonable than 108</li>
    <li>This is/was a PoST course so there was an 85% final grade requirement to make it into the major/spec</li>
</ul>
<p>
    Math courses
</p>
<ul>
    <li>I took MAT135 and MAT136 in first year (I lowkey regret this)</li>
    <li>These courses were a slight extension of high school calculus and were essentially just GPA boosters</li>
    <li>MAT137/157 are much better and you will get more out of them but they may impact your ability to make PoST</li>
</ul>
<b>Second Year Courses</b>
<p>
    CSC207 - Summer 2024 UTSG
</p>
<ul>
    <li>This was my favourite CS course in second year</li>
    <li>Do note that the style of this course varies a lot depending on the offering, I just so happened to get the good one that lets us pick our own project</li>
    <li>Properly learning Git, version control, and API usage was pretty useful, gave me the knowledge to hit the ground running in my own projects</li>
    <li>I had a very good group and lowkey got carried</li>
    <li>Met a lot of new people in this course and made some good friends</li>
</ul>
<p>
    CSC236 - Summer 2024 UTSG
</p>
<ul>
    <li>This was my least favourite CS course in second year</li>
    <li>I just found the content to be kind of dry and the assessments to be unpleasant (I might just be monkey brain tho)</li>
    <li>Got carried through the problem sets which did have some fun concepts (One of them was Balatro themed)</li>
    <li>Almost autofailed the final exam LOL</li>
    <li>My lowest grade in a CS course so far</li>
</ul>
<p>
    CSC258 - Fall 2024 UTM
</p>
<ul>
    <li>This course was divisive</li>
    <li>I found it to be a slog at times but it wasn't too bad in terms of workload</li>
    <li>We used an online IDE which was a pain</li>
    <li>The tests were kinda difficult since they were 50 minutes long and with very little part marks</li>
</ul>
<p>
    CSC209 - Winter 2025 UTM
</p>
<ul>
    <li>Love hate relationship with this course</li>
    <li>Learning UNIX and C was fun, SSHing and having to do 2fa every time I wanted to work on my project was not</li>
    <li>Our project was solo and we had to implement a basic shell which was fun at first but then became a massive pain</li>
    <li>The grading scheme was nice and let us drop our lowest assignment milestone</li>
    <li>The midterm was pretty fair but I, once again, almost autofailed the final exam</li>
</ul>
<p>
    This covers the core CS courses for first and second year, I might write a follow up for more courses and electives in the future.
</p>
`
</script>

<template>
    <BlogTemplate :title="title" :date="date" :content="content" />
</template>
