import React from "react";

const Lesson1 = () => {
	return (
		<div>
			<h4>Summary</h4>
			<ul>
				<li>
					Passwords are used to uniquely identify you ("authenticate")
					who you are and that you are a legitimate, registered user
					on the site/app.
				</li>
				<li>
					A service provider has a database with each username or
					email address mapped to a password.
				</li>
				<li>
					To protect themselves against hackers getting access to
					passwords in case of a data leak, companies store hashes of
					passwords instead of plain-text.
				</li>
				<li>
					A hash is a one-way black box: you give it a word, and it
					gives you back a copletely different word. The idea of
					"one-way" is that you cannot reverse the result back to the
					original input.
				</li>
				<li>
					Popular hashes have been cracked and decoded — this can be
					done through brute force, by trying every input (every
					possible password) and recording the output.
				</li>
				<li>
					"Salts" can be used to make passwords more secure. More
					information about salts{" "}
					<a href="https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/">
						here
					</a>
					.
				</li>
				<li>
					A good password will be long, unique, include special
					characters. You should try to use a different password for
					each site, which can be easily done with a password manager
					app (1Password, LastPass). Use two-factor authentication
					where possible.
				</li>
			</ul>
			<h4>
				<a href="/">
					Coming soon: Test your knowledge — complete the Lesson 2
					quiz!
				</a>
			</h4>
			<h4>Transcript</h4>
			<p>
				A couple of months back I received an email from an unknown
				sender saying they have some compromising videos and photos of
				me they recorded using my webcam. The email stated that they
				will share that content with my friends and family unless I pay
				$2000 into a bitcoin wallet they provided.
			</p>
			<p>
				What freaked me out the most though is that the sender
				referenced one of my old passwords to prove that they really
				have my information. Now that’s quite scary — because even if
				they lied about possessing videos or photos they were talking
				about, they may still be able to use that password to access my
				email, bank account or social profiles.
			</p>
			<p>
				We’ll split this video into three parts: first let’s talk about
				how passwords are stored, and then we’ll examine how and why
				they may be hacked. Finally, we’ll look at some of the best
				practices of choosing a secure password.
			</p>
			<h5>How Passwords Are Stored</h5>
			<p>
				When you choose a password for your banking app, social media
				app or a grocery delivery website, it is sent somewhere. The
				website owner’s job is to store both your username and/or email
				address and your password, so that when you enter the two, they
				can know that it’s really you.
			</p>
			<p>
				Now, if a website owner kept your username and your password
				just as they are, so-called “plain-text”, that would be quite
				dangerous. If someone accidentally gets access to the user
				database, they could immediately see all usernames and passwords
				associated with each other and use them to do bad things. Or
				sell them. Or paste them online for everyone to see on a random
				site, which is probably how the hacker from my email got mine.
			</p>
			<p>
				This is why passwords aren’t usually just stored as words, and
				instead, their “hashes” are stored. Not hashbrowns. Hashes.
			</p>
			<p>
				A hash, in formal terms, is a one-way function. In informal
				terms, it’s kind of like a black box to which you give a word,
				and it spits out another word. Unlike encryption algorithms,
				hashes can only do it one-way, meaning that the word the
				blackbox produces cannot be reversed back into its original
				form.
			</p>
			<p>
				What this means, is that somewhere between you entering a
				password and that password being sent to a database, it is
				“hashed”, so the password it receives is not your real password.
				That’s what is stored in the database, and when you log in, the
				same hash is checked.
			</p>
			<p>
				A popular hashing algorithm is called MD5. For example, password{" "}
				<i>hunter2</i> would be turned into{" "}
				<i>db941ff0a535664048abe7b44dfbe870</i> by MD5. Makes sense?
			</p>
			<h5>How Passwords Are Hacked</h5>
			<p>
				Hashing passwords sounds like a really great solution against
				hackers, because even if someone does get access to a website’s
				user database, all they will see is a bunch of email addresses
				and clusters of letters and numbers. They wouldn’t be able to
				use those to log into a website (because the website would just
				again hash whatever input it gets, so a completely different
				piece of text would be sent and it wouldn’t match the original
				hash).
			</p>
			<p>
				Unfortunately, there are at least two issues with this. One, not
				all websites hash their passwords, especially older ones. Two,
				hashes are occasionally cracked and decoded.
			</p>
			<p>
				This can be done through brute force, for example, by trying
				every input (every possible password) and recording the output.
			</p>
			<p>
				Another example of an attack is a Rainbow Table. Say, someone
				gets hold of 15,000,000 passwords and uses a powerful computer
				with a lot of processing power to make up hashes for each
				password. So now they have mappings of 15,000,000 passwords to
				their hashes.
			</p>
			<p>
				There are additional techniques, like “salting” hashes, to make
				passwords more secure — add an additional word to each password
				in an attempt to make the resulting hashes more unique. Hunter2,
				Password and 12345 are common passwords and a hacker will
				immediately recognise them if they see their hash equivalents in
				a database. But if we instead hash hunter2hello, passwordhello,
				12345hello, if a hacker sees their hashes in the database, they
				probably won’t be able to decode it so easily. The salts are
				handled by programmers.
			</p>
			<p>
				Read more about it in{" "}
				<a href="https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/">
					this brilliant article by Troy Hunt
				</a>
				.
			</p>
			<h5>How to Choose a Password</h5>
			<p>
				It may seem like nothing is secure, and passwords are totally
				worthless if everything can be hacked anyway.
			</p>
			<p>
				The key to choosing a good password is to choose something
				that’s long, unique, and can’t be easily guessed by someone who
				knows you. Data leaks are common, but the chances of your
				password being guessed by a nosy friend or a lover are way
				higher.
			</p>
			<p>
				In fact, one of the reasons why websites ask you to use special
				characters, is specifically for that reason. To a black box
				hash, it doesn’t make that much of a difference, whether it
				receives an <i>a</i> or an exclamation mark, unless the mappings
				are leaked of course, but your “frenemy” may know your favourite
				high school teacher’s name, but not know that you substituted
				the <i>i</i> with a <i>!</i>.
			</p>
			<p>
				It’s a good idea to have a different password for each site, in
				case a data leak happens and the password you always use is
				revealed alongside your email address. It can be quite hard to
				keep track of dozens and potentially hundreds of passwords, as
				well as regularly update them etc. Luckily, there’s software to
				help us do that, as well as some browsers have built-in
				capabilities for this. Also, if you can, use two-factor
				authentication — the "two factors" are usually a password, and
				confirming your identity through clicking an email link or
				entering a code you receive via text message. It's an additional
				layer of protection.
			</p>
			<p>
				Lastly, I want to say that if you ever get an email like I did,
				the first thing you should do is change your password on all
				services that may be using it. It is very unlikely that the
				sender has the information they’re talking about, it’s a known
				scam scenario that’s been around for years. Regardless, covering
				your webcam is not a bad idea. Even Zuckerberg does it.
			</p>
		</div>
	);
};

export default Lesson1;
