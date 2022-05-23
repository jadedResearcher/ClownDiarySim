//todo, do i want the words of the day to lead anywhere?
const entries = [
    new Entry(0,"Day 1", `
    <p dir="ltr"><span>Viktor said that I should have a diary. They said it would help me better remember things and concepts. I thought about it and I think they&rsquo;re right. I think a lot better when I&rsquo;m writing because I can look back at what I wrote and I don&rsquo;t have to do it all at once.&nbsp;</span></p>
    <p dir="ltr"><span>So I got this journal from one of the abandoned shops down here. It has a clown with a gun as the cover. I don&rsquo;t really get it but I like their red nose and eyes. I think it really suits them. </span></p>
    `, "none")
    ,new Entry(1,"Day 2", `<p>I showed Viktor my journal. They said it looks really nice but that I should keep it to myself because it&rsquo;s for my thoughts. So I&rsquo;m not sharing it anymore. They also said that I should emphasize any new concepts I learn because then I can see how good I&rsquo;m getting at learning new words and that way I can count how many I&rsquo;m learning per day.</p>

    <p>Today I learned the word centennial. It means &lsquo;a hundredth anniversary&rsquo;. The people who made this notebook made it on the centennial. I don&rsquo;t know what was so important about this clown book that they had to do it on that day but they did it anyway.</p>
    
    <p>I&rsquo;m glad they did it. I like the clown notebook.</p>`, "centennial")

    ,new Entry(2,"Day 3", `<p>Khana came to talk to me today. He said he wanted to hang out and I was bored so I said yes. He let me use my notebook the whole time too. I asked him if it bothered him because Viktor said that some people would see it as impolite but after I told him it was a journal he didn&rsquo;t care at all. He said that some people might find it rude but that I should do it anyway because it&rsquo;s my notebook. He then told me some stories and taught me the word &lsquo;defenestrate&rsquo;.</p>

    <p>Apparently it&rsquo;s when you toss something out of a window. He said he&rsquo;d gotten into a bar fight at some point and he had defenestrated a guy. I don&rsquo;t think it makes a lot of sense because he&rsquo;s always carrying a wrench so I pointed that out. He said he didn&rsquo;t have the wrench back then but yeah maybe if he did have it he would have just hit him.</p>
    
    <p> I liked hanging out with Khana. We don&rsquo;t do that a lot but I like it when we do even if he&rsquo;s kind of weird. That&rsquo;s fine. I&rsquo;m kind of weird. I don&rsquo;t know who&rsquo;s right though. Viktor is very smart but Khana talks to a lot more people. Maybe I&rsquo;ll sleep on it and decide later.</p>`, "defenestrate")
    ,new Entry(3,"Day 4", `<p>I think there&rsquo;s a rat inside the walls. It has to be big because I could hear it when I went to sleep. It makes noises along the wall whenever it comes by. That means it skitters. I don&rsquo;t know if it lives nearby or if it was just passing through but I don&rsquo;t think Viktor would like it if I told them there was a big rat. Maybe it won&rsquo;t come back. We&rsquo;ll see if it comes back.</p>`, "skitters")
    
    ,new Entry(4,"Day 5", `<p>Heard the rat again. This time I told Khana and he woke up to check. He said he could hear it as well and that we probably had to stop it from nesting. So he used his wrench and he slammed it into the wall several times. He has to be really strong because he didn&rsquo;t sweat at all. Then the skittering stopped. He said that we probably had to do that a couple more times so that it&rsquo;d stop prowling. That means that it&rsquo;s hunting and looking around. So he&rsquo;s staying with me for the rest of the night.</p>

    <p>It&rsquo;s morning now. Or at least the clock says so. It&rsquo;s hard to tell down here. Khana was swinging at the wall but he said it was because he was bored. I&rsquo;m going to prowl around for something good for all of us to eat and then maybe tomorrow I&rsquo;ll go ask the Training team to see if they know about any rats.</p>`, "nesting, prowling")
    ,new Entry(5,"Day 6", `<p>Today I went to the higher floors. It was very nice. I like seeing all the people and the shops. I told Viktor I was going and they told me to be careful. They weren&rsquo;t very happy that I told them I was going to see the Training team but they said that I should only trust Devona and Neville. I thought all of them were really nice when I went there but I can&rsquo;t see a reason to disobey orders.</p>

    <p></p>
    
    <p></p>
    
    <p>I asked Devona if she knew about any rats. She said she had seen some rats close to some of the old bakeries and I asked her if she could help me look and she said okay. So we went down to the left wing (I know what a wing is obviously but in this case it means like a department. She also told me you can say &lsquo;wing it&rsquo; like you&rsquo;re improvising something (doing it without preparing). There&rsquo;s a lot of ways to say the word wing).</p>
    
    <p>She was really scared the whole time. I asked her and she said it&rsquo;s because she&rsquo;s afraid of the dark. I asked her if she was scared of the dark because we were winging it and she said yes. So that made sense.</p>
    
    <p>We looked around and saw a lot of ants and rats but we didn&rsquo;t see any big rats. She said she hadn&rsquo;t seen any big rats and asked me how big I thought the rat was. I told her I thought it was about as big as a chair or maybe a bit less. She said that rats don&rsquo;t grow that big and asked if I saw it. I didn&rsquo;t see it. So she scratched her head and told me I should see if it comes back and then tell her. And that was fine by me so I said yes.</p>
    
    <p>Either way I enjoyed our adventure. I learned a bunch of new words and I like how her hair is all bouncy when she walks. She said that if I ever want to hang out I should ask her. I think I will.</p>
    
    <p></p>`, "wing, wing it, improvising")

    ,new Entry(7,"Day 8", `<p>Sorry I didn&rsquo;t write yesterday. It was really uneventful (I learnt this one myself, it means an event didn&rsquo;t happen). I asked, Viktor if I had to write every day, and they said I don&rsquo;t have to, and that it&rsquo;s my diary so I can do what I want with it. And that made sense, so I didn&rsquo;t write. I also showed them a page, because I wanted, and they said that they shouldn&rsquo;t be looking at it, but that if I really wanted advice, then I should use commas more, because it helps space out the sentence. So, I&rsquo;m trying them out to see if they, help.</p>

    <p>I invited Devona and Khana to hang out though. I don&rsquo;t think they like each other, because when we were walking around he&rsquo;d get closer to her and then she would get away, and then he would do it again, and at that point the compromise was that I was in the middle of them. I had fun but I don&rsquo;t think they did. Devona doesn&rsquo;t like talking about when she feels bad. I told Khana that she looked upset, and he said he didn&rsquo;t get why, when he wasn&rsquo;t harassing her (annoying her? Being hostile or mean).</p>
    
    <p>I don&rsquo;t know. Hanging out feels like a lot of work. I don&rsquo;t mind the work, but it feels really hard to know what everyone likes, and then they&rsquo;re upset. I think I just will not hang out for some time. That way I can decide if I like being alone more.</p>`, "uneventful, harassing ")


    ,new Entry(11,"Day 12", `<p>I think I like being alone a bit more than I like being near people. Not that I don&rsquo;t like people. But the point is, when I&rsquo;m by myself, no one gets upset. If people ask me to hang out, then that&rsquo;s fine, but if I have to ask then I feel bad, like I&rsquo;m carrying something really heavy by myself. Also people expect me to talk and I don&rsquo;t always feel like talking a lot. Sometimes I don&rsquo;t want to talk at all. So if I don&rsquo;t want to talk to anyone, I don&rsquo;t hang out.</p>

    <p>It does mean I haven&rsquo;t learned any new words though, so I looked around and found a dictionary. It&rsquo;s a book full of words and what they mean. One I learned is &lsquo;flummox&rsquo;. It means that something is confusing. It also means something is perplexing, which means the same thing. It&rsquo;s funny how there are so many words which are the same thing.</p>
    
    <p>Remember that rat? I found a hole in a secret wall two days ago, and that flummoxed me, because it didn&rsquo;t look like the holes Khana makes with his wrench. It was a perfectly round hole the size of my fist. I think the rat walks through there, so I think if I leave food in there, the rat will pick it up and eat it. If it doesn&rsquo;t, then maybe it&rsquo;s not a rat.</p>
    
    <p>I think I have a good idea about what would make it come out. I&rsquo;m going to set it up today, and then I will write down the results tomorrow.</p>`, "dictionary, flummox, perplexing")

    ,new Entry(12,"Day 13", `<p>Last night I offered it slices of cheese and ham. My thought process-- the way I think or why I think the way I do, you can also say train of thought-- is that if it&rsquo;s a rat, it would eat the cheese, and if it was something bigger like a cat, it would eat the meat.</p>

    <p>But it ate them both. They were gone by the time I woke up. I went to put down more cheese and more ham, and immediately-- really really quickly-- after I left it ate those as well. I think it likes the cheese, but it also ate the ham. Maybe it likes both.</p>
    
    <p>At least I know that it likes to skitter around that hole, but I&rsquo;m not sure what it is anymore. I want to ask, but I don&rsquo;t want to have to care about what they think, the dictionary is so much easier. I don&rsquo;t know. I&rsquo;ll think about how I feel later.</p>`, "thought process, train of thought")

    ,new Entry(13,"Day 14", `<p>I&rsquo;ve been feeding the rat. Whenever I go prowling for food, I make sure to sneak in some cheese and ham for the rat. It always eats it, no matter what time of day it is. I tried sticking my hand to see if I could touch it, and I found out that the hole is broader (deeper) than I thought it was. When I finally touched something, It felt viscous (wet, slimy) and full of teeth. I think it was its mouth. I&rsquo;m more surprised that it didn&rsquo;t bite me, it just waited until I pulled my fingers out. I think I got close to its snout when I did because it started sniffing at my hand really loudly, but after I stopped it stopped.</p>

    <p>I&rsquo;m going to call him Harold. It&rsquo;s a nice name for a rat.</p>`, "broader, viscous ")

    ,new Entry(17,"Day 18", `<p>I don&rsquo;t think Harold&rsquo;s a rat.</p>

    <p>When I was coming back today to get it food, I saw its hands. It had human hands, but its fingernails were long and dirty and they bent downwards (they curled down). It went back in the hole when I looked at it, so I thought it was avoiding me. But then, I put the ham near the hole and it came out to grab it, it didn&rsquo;t even wait until I wasn&rsquo;t looking.</p>
    
    <p>Maybe it trusts me. Or maybe it can&rsquo;t see that I&rsquo;m there. This whole thing flummoxes me.</p>
    
    <p>I tried for a couple of hours, and now it will grab the food right out of my hand. I don&rsquo;t think I&rsquo;m going to keep doing that, though. I don&rsquo;t know what it is, but I hate its nails on my skin.</p>`, "bent downwards")



    ,new Entry(18,"Day 19", `<p>I heard it speak.</p>

    <p>&lsquo;There is respite beneath the earth. Beneath the earth. The arms of its clock will reach us. I must keep digging. Keep digging. The third trumpet will set me free.&rsquo;</p>
    
    <p>It repeated variations (different ways) of that over and over for the rest of the day, and then it stopped. I think I&rsquo;ve heard its voice before, but I don&rsquo;t know where.</p>
    
    <p>I wonder if we&rsquo;re friends.</p>`, "respite, beneath, variations ")


    ,new Entry(24,"Day 25", `<p>I&rsquo;ve been talking to the hole person.</p>

    <p>That sounds bad. But it&rsquo;s nice. I don&rsquo;t like talking to the others anymore. They start getting worried when I talk about the hole, and then they start hitting me in the head to check my mental corruption. The hole person doesn&rsquo;t judge, as weird as it is. If I get upset, I can walk away, and I don&rsquo;t think it gets upset, but it can probably walk away.</p>
    
    <p>It says stuff all the time. I can just listen, and read along with my dictionary, and I learn a lot of words from it.</p>
    
    <p>I asked if it had a name, and, apparently, it doesn&rsquo;t have one, because it has many. I asked if I could call it Harold, and it said that was fine. It&rsquo;s been telling me all about something called the hole at the end of the world, and that if you jump in it, it can take you anywhere. Once you enter it, you can never exit it, you can only go through the tunnels inside it. But right now, the hole is clogged. Something about how we&rsquo;re stuck.</p>
    
    <p>I asked if there was something I could do about it. It said it was impossible to unclog it, and that all we could do was wait. Harold said it so matter-of-factly, like it was the most obvious solution in the world. It doesn&rsquo;t like waiting, but also if you wait long enough, it becomes natural.</p>
    
    <p>It also told me a lot of stories. They were all pretty magical; something about a city of lights and symbols where death is the only truth, a world in the past where some heroes have to collect the shards of a jewel, a story about a place where your brain and a computer are the same thing. When I&rsquo;m not talking to it, that&rsquo;s all it rambles on about.</p>
    
    <p>I like them. The stories. Some are familiar, like I remember them, and some are like something I&rsquo;ve had happen to me. Everything is always somewhat fuzzy for me, but when I hear something that makes sense, it feels like my head gets lighter, and I can think a little bit faster. Like there&rsquo;s more and more&#8230; me.</p>
    
    <p>I wish the others got it. I wish they&rsquo;d understand.</p>`, "apparently, clogged, unclog, matter-of-factly, rambles, fuzzy ")


  ]

  /*
  
  ,new Entry(0,"Day 0", `lorem ipsum etc`, "none")

  */
