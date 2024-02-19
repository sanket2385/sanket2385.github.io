// Convert the 'terminal' DOM element into a live terminal.
// This example defines several custom commands for the terminal.
var terminal = new Terminal('terminal', {prompt: 'sanket&#64;tech.leader&#58;&#126;', separator: '#'}, {
	execute: function(cmd, args) {
		switch (cmd) {

			case 'About':
			case 'ABOUT':
			case 'about':
				return '<p>Sanket is an experienced Technology Leader with a proven track record of driving innovation, strategy, and results in the fast-paced world of tech. Throughout my career, I have consistently demonstrated a passion for leveraging cutting-edge technologies to transform businesses and enhance operational efficiency. As a visionary leader, I thrive in leading cross-functional teams, inspiring them to excel and exceed expectations. My expertise spans Software Development, Robotic Process Automation, Chatbots, Integration, SharePoint Development, data analytics, cloud computing, and cybersecurity, enabling me to navigate complex challenges and devise comprehensive solutions. I am committed to fostering a culture of continuous learning and professional growth, recognizing that empowered and engaged teams drive success. Together, lets pioneer the future of technology and make a lasting impact in an ever-evolving digital landscape. Lets team up and explore new possibilities for innovation and growth.</p>';

			case 'Skills':
			case 'SKILLS':
			case 'skills':
				return '<p>PHP, MySQL, MSSQL, .NET, C#, ReactJS, NodeJS, MongoDB, NoSQL, AWS, Azure, Google Cloud, Symfony, CodeIgniter, Laravel, ExpressJS, AngularJS, VueJS, Javascript, Wireframing tools, JIRA, Confluence, Github, Gitlab, Bitbucket, MacOS, Windows, Linux, Docker, Kubernetes, CI/CD, Trello, HTML, SFTP, FTPS, RESTAPI, SOAP, MVC Frameworks, Worspress, CSS, Teams, Slack, Skype, Kohana, Sass, SaaS, iPaaS, RPA, Chatbots, Automation Anywhere, UI Path, Enterprise Architect, Visual Studio Code, Boomi Integration Platform</p>';

			case 'Services':
			case 'SERVICES':
			case 'services':
				return '<p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Bespoke Web Application Development</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Android App Development</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;IOS App Development</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Project Management Service</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Bespoke CMS Development</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Sub Contracting with Digital Agencies</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Tech Partnership with Start Ups</p>';
			case 'Contact':
			case 'CONTACT':
			case 'contact':
				return '<p>If you are looking for a solid partner for your projects, i would love to talk!</p><p>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;Click here: <a href="mailto:sanket.patel2385@gmail.com">Email Me</a> to get in touch</p>';

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
