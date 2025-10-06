---
title: "Customizing Mass Outreach with Ringless Voicemail"
description: "Learn how to personalize cold outreach at scale with Sly Broadcast ringless voicemail using Make.com and Eleven Labs"
pubDate: "2024-10-10"
---

https://youtu.be/bV6TQqPDseA?si=X52elYOYyzertOTc		
			# Customizing Mass Outreach with Ringless Voicemail

		
			<h4>
				Table of Contents			</h4>
							<svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
				<svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
				<svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M500 975V858C696 858 858 696 858 500S696 142 500 142 142 304 142 500H25C25 237 238 25 500 25S975 237 975 500 763 975 500 975Z"></path></svg>			
			## Tools/Software Required:

		
		- [Make.com](https://www.make.com/)
- [Eleven Labs](https://elevenlabs.io/)
- [Sly Broadcast](https://www.slybroadcast.com/)
- [Google Drive](https://drive.google.com/)
		
			## The Intro:

		
		In this video, we’ll explore **how to use ringless voicemail** to customize mass outreach, leveraging automation tools to maximize efficiency.

		
			## Why Ringless Voicemail?

		
		Ringless voicemail allows you to **slip directly into your prospects’ voicemail** without interrupting them with a phone call. Instead of their phone ringing, they receive a voicemail notification that they can check at their convenience. If your offer is compelling, this can lead to a returned call.

		
			## Step-by-Step Guide:

		
		<li>**Populating Leads**
First, we’ll need a database to house our leads. In this example, we’re using **Airtable**. You can gather leads from various sources:

- Apollo
- Hunter
- Hire a VA to compile or scrape leads manually
- Build an automation to scrape and enrich leads
For simplicity, we’re using a basic setup: each lead contains a **name, business name, and phone number**.



</li><li><strong>Automation in Make.com
</strong>![](/images/2024-10-10-customizing-mass-outreach-with-ringless-voicemail-img-3.png)
The automation is set up in **Make.com** to monitor the Airtable database. The automation runs daily at 4:18 p.m. It:

- Grabs the records from Airtable.
<li>Sends them to **11 Labs** for voice synthesis, where you can choose from various voices using **11 Labs multilingual version 2**.

</li></li><li>**Script Customization**
You can either:

- Hardcode a script with placeholders (e.g., first name, business name) from Airtable.
- Integrate a language model to pull additional data (e.g., LinkedIn profile, email) for an even more personalized voicemail message.
</li><li><strong>Generate and Upload Voicemail
![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBLlz3XH6CcKZH-8aUuOp4eppMzRRncf-Kw&s)</strong>
Once the script is generated, the automation sends it to **11 Labs**, which synthesizes the speech. We then:

- Upload the file to **Google Drive** to create a **share link**.
- Download the file for use in **Slybroadcast**, our ringless voicemail software.
</li><li>**Sending the Ringless Voicemail**
Using Slybroadcast:

- Add the **phone number** from Airtable.
- Set the **caller ID** (in this case, an AI agent trained with company knowledge and access to a calendar for booking demos).
- Set the delivery format to **MP3** (as accepted by Slybroadcast).
- Schedule the voicemail for delivery.
</li>### Results

For example, we scheduled a voicemail for a prospect named Bill. When the automation runs, it will:

- Output the voicemail: “Hey Bill, this is [your pitch].”
- Upload the voicemail.
- Create a share link.
- Send it to Slybroadcast for delivery.
We then verified the voicemail is scheduled for tomorrow at 8:15 a.m.

		
			## Why This Works

		
		Ringless voicemail is a **cost-effective** solution:

- Plans start at **$8 per month** for 100 sends.
- Even with a **1-2% conversion rate**, one callback could easily cover your cost.
		
			## Next Steps

		
		If you have questions about **adding functionality** to this automation or how to implement it in your business, then [book a call](https://1000xsales.com/book-a-call/) This is just a **basic example**, but it shows the power of automating repetitive tasks and **leveraging your time**.

		
			## Download The Blueprints:

		
		[Download the Make.com blueprint](https://drive.google.com/file/d/1MWYr78ZOTGJ0q3BKmWt1u_gYzKzX7RlP/view?usp=sharing)
