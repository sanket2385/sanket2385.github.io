// Convert the 'terminal' DOM element into a live terminal.
// This example defines several custom commands for the terminal.
var terminal = new Terminal('terminal', {prompt: 'sanket&#64;webvice.co.uk&#58;&#126;', separator: '#'}, {
	execute: function(cmd, args) {
		switch (cmd) {

			case 'About':
			case 'ABOUT':
			case 'about':
				return '<p>Sanket is an experienced Software Engineer / Project Manager / Entrepreneur / Problem Solver { Turning complex problems into simple solutions }. </p><p>Currently working as a software developer for Dixons Carphone Group and splitting my time between a number of different clients across the world.</p>';

			case 'Skills':
			case 'SKILLS':
			case 'skills':
				return '<p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;AngularJs</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;NodeJs</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;HTML5</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;CSS3</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;PHP OOP + PHP Frameworks { Laravel, Symfony, Codeigniter }</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Leadership</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Agile Project Management</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Team Mentoring</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Time Management</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Self Learning</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;And counting { Learning everyday :) }</p>';

			case 'Services':
			case 'SERVICES':
			case 'services':
				return '<p>Sanket founded <a href="http://webvice.co.uk">webvice</a> in 2014. And we provide the following services at webvice</p></p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Bespoke Web Application Development</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Android App Development</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;IOS App Development</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Project Management Service</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Bespoke CMS Development</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Sub Contracting with Digital Agencies</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Tech Partnership with Start Ups</p>';

			case 'Work':
			case 'WORK':
			case 'work':
				return '<p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Please visit: <a href="http://webvice.co.uk/case-studies">webvice.co.uk/case-studies</a> to see my contribution to the tech industry</p>';

			case 'Contact':
			case 'CONTACT':
			case 'contact':
				return '<p>If you are looking for a solid partner for your projects, i would love to talk!</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Click here: <a href="mailto:sanket@webvice.co.uk">sanket@webvice.co.uk</a> to get in touch</p><p>Connect with me on social media</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;<a style="background-color: #1da1f2;" href="https://twitter.com/sanket2385" target="_blank">Twitter</a></p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;<a style="background-color: #4267b2;" href="https://www.facebook.com/sanket.patel2385" target="_blank">Facebook</a></p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;<a style="background-color: #287bbc;" href="https://uk.linkedin.com/in/sanketpatel2385" target="_blank">Linkedin</a></p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;<a style="background-color: #FFFC00;color:#000000;" href="https://www.snapchat.com/add/sanketpatel2385" target="_blank">Snapchat</a></p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;<a style="background-color: #9b6954;" href="https://www.instagram.com/sanket2385" target="_blank">Instagram</a></p></p>';

			case 'Clear':
			case 'CLEAR':
			case 'clear':
				terminal.clear();
				return '';

			case 'Help':
			case 'HELP':
			case 'help':
				return '<p>You can use the following commands to know Sanket better:<br><br></p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;about</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;skills</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;services</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;contact</p> <br><p>Here are some utility commands</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;clear</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;help</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;theme interlaced</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;theme modern</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;theme white</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;version</p>';

			case 'Theme':
			case 'THEME':
			case 'theme':
				if (args && args[0]) {
					if (args.length > 1) return 'Too many arguments';
					else if (args[0].match(/^interlaced|modern|white$/)) { terminal.setTheme(args[0]); return ''; }
					else return 'Invalid theme';
				}
				return terminal.getTheme();

			case 'Version':
			case 'VERSION':
			case 'version':
				return '1.0';

			default:
				// Unknown command.
				return false;
		};
	}
});
