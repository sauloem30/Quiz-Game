let questions = [
    {
        numb: 1,
        question: "<b>Alcohol</b><br>You pour some Grey Goose vodka into your own 3.4 ounce liquids container and bring it as a carry-on through security. This container will:",
        answer: "Be Allowed",
        options: [
            "Be Allowed",
            "Not Be Allowed",
            "Be allowed only if a flight attendant serves it to you",
        ],
        explanation: "TSA has no rules against transporting alcohol in bottles that you did not purchase the alcohol in but if they contain more than 24% alcohol but not more than 70% alcohol they need to be in unopened retail packaging.<br> In this case, bringing your door own vodka would not be allowed because it is more than 24% alcohol and it would not be in his original packaging",
    },
    {
        numb: 2,
        question: "<b>Batteries</b><br>You have a laptop with lithium ion batteries and you want to bring it on the plane. This laptop is:",
        answer: "Only allowed in your carry-on",
        options: [
            "Only allowed in your carry-on",
            "Allowed in both your carry-on and checked baggage",
            "Only allowed in checked baggage if you remove the battery",
        ],
        explanation: "Contrary to what many believe, you can bring lithium ion batteries in your checked baggage as long as they are inside of the electronic device.<br> However, the FAA recommends that you transport these in your carry-on for safety and security reasons.",
    },
    {
        numb: 3,
        question: "<b>Lighter</b><br>You have two disposable functioning lighters and bring them to security. These two lighters will be:",
        answer: "Allowed in your carry-on",
        options: [
            "Allowed in your carry-on",
            "Not allowed because only one lighter is allowed per traveler",
            "Not allowed because lighters are never allowed on a plane",
        ],
        explanation: "According to the FAA, when traveling on a commercial airline you can bring one lighter that uses a flammable gas (butane) or that uses a flammable liquid that is absorbed in a lining (Zippo-type of lighter).<br> You are allowed to bring disposable and Zippo lighters without fuel in carry-on bags or checked bags but there must be no traces of fuel or vapor inside the lighters.<br> (The FAA recommends that passengers pack empty lighters in checked baggage accompanied by a note explaining that they contain no fuel.)",
    },
    {
        numb: 4,
        question: "<b>Food</b><br>You have a travel sized container full of honey weighing 4.5 ounces. When bringing this through security it should:",
        answer: "Allowed in your carry-on",
        options: [
            "Allowed in your carry-on",
            "Not be allowed in your carry-on due to the TSA liquids 3-1-1 rule",
            "Only allowed in checked baggage due to the TSA liquids 3-1-1 rule",
        ],
        explanation: "Honey weighing 4.5 ounces would fill a 3.4 fluid ounce container which would be allowed in your carry-on.<br> A lot of people get weight and volume mixed up when it comes to be 3.4 ounce rule and this example shows how the label on some products may lead to confusion.",
    },
    {
        numb: 5,
        question: "<b>Bear Spray</b><br>You’re getting ready for the ultimate hiking trip but you want to make it out alive so you plan to bring bear spray on a plane. The bear spray will be:",
        answer: "Not allowed in your carry-on or checked baggage",
        options: [
            "Allowed in your carry-on if you meet the airline’s safety requirements",
            "Not allowed in your carry-on or checked baggage",
            "Only allowed in your checked baggage if you meet the airline’s safety requirements",
        ],
        explanation: "Sorry hikers but unfortunately, you cannot bring bear spray as a carry-on or in your checked baggage.",
    },
    {
        numb: 6,
        question: "<b>Mini Pocket Knife</b><br>You want to bring your Mini pocket knife under 2.3 inches on board",
        answer: "Not Allowed in your carry-on",
        options: [
            "Allowed in your carry-on",
            "Not Allowed in your carry-on",
            "Only allowed in your carry-on if the blade locks",
        ],
        explanation: "A lot of countries allow you to fly with knives under 2.3 inches but the US is not one of those! No pocket knives of any type or allowed through the TSA checkpoint.",
    },
    {
        numb: 7,
        question: "<b>Photo / Video</b><br>You want to take a video of the TSA agent waving someone through the TSA security checkpoint for your next IG Reel. This is:",
        answer: "Allowed",
        options: [
            "Allowed",
            "Not allowed",
            "Allowed, but only if your phone is not password protected",
        ],
        explanation: "You are allowed to film TSA agents as long as you do not interfere with screening or record sensitive information. According to TSA:<br> TSA does not prohibit photographing, videotaping or filming at security checkpoints, as long as the screening process is not interfered with or sensitive information is not revealed.<br> So TSA will allow photos and videos at checkpoints but it really comes down to what counts as interference or sensitive information.",
    },
    {
        numb: 8,
        question: "<b>Privacy</b><br>A TSA agent did not appreciate you featuring them in your Reel and wants to investigate the contents of your phone's photo album. While at the security checkpoint this is:",
        answer: "Not allowed",
        options: [
            "Allowed",
            "Not allowed",
            "Allowed, but only if your phone is not password protected",
        ],
        explanation: "TSA is not a law enforcement agency and therefore lacks certain types of search and seizure authority.<br> According to communications from the TSA, the agency, “does not search electronic devices for electronic content that may be contained on the device, and does not extract data from passenger electronic devices.”<br> Electronic devices would mean things like phones, laptops, cameras, tapes, external hard drives, etc.",
    },
    {
        numb: 9,
        question: "<b>Body</b><br>You just had to go through the full body scanner and TSA agent is reviewing your screen. Here she will see the following:",
        answer: "A cartoonish avatar with highlights of detected objects",
        options: [
            "A ghostly image of your naked body with highlights of detected objects",
            "A black silhouette with highlights of detected objects",
            "A cartoonish avatar with highlights of detected objects",
        ],
        explanation: "Backscatter machines are the original body scanners used by TSA and those machines utilized X-rays which contained ionizing radiation.<br> These were the machines that allowed a screening agency to see what was essentially a ghostly image of your naked body.<br> However, now TSA uses the Millimeter Wave AIT scanners and a TSA agent really sees a cartoonish avatar with highlights on your body were an object was detected.",
    },
    {
        numb: 10,
        question: "<b>ID</b><br>If you forget your government issued ID at the TSA security checkpoint, your options for getting through security could be:",
        answer: "Show a credit card and photo of your ID",
        options: [
            "None. There is no way around showing a government issued ID unless there’s an emergency.",
            "Have an accompanying passenger over 18 sign an ID verification form",
            "Show a credit card and photo of your ID",
        ],
        explanation: "f you do not have an ID you, you may be able to verify your ID by supplying two forms of secondary ID. The secondary form of ID can take a lot of different forms and these include: Library card;<br> Business card;<br> Social Security card;<br> Student ID; Mail;<br> Credit cards; Photo of an ID;<br> Voter registration card;<br> Prescription with your name on the label.<br> If your wallet or ID was stolen then it would be very helpful for you to have a police report to back up your claim. If you are traveling with family members who do have an ID and you have photos of you together with them that can also help bolster your case.<br> The more documents you can supply, the better.",
    },
]