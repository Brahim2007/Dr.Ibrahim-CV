(function($) {
    "use strict";
     $(document).on('ready', function() {
	
		// Typing Effect for Title
		function typeWriter(element, text, speed, callback, cursorElement) {
			var i = 0;
			element.textContent = '';
			if (cursorElement) cursorElement.style.opacity = '1';
			
			function type() {
				if (i < text.length) {
					element.textContent += text.charAt(i);
					i++;
					setTimeout(type, speed);
				} else {
					if (cursorElement) {
						setTimeout(function() {
							cursorElement.style.opacity = '0';
						}, 500);
					}
					if (callback) {
						setTimeout(callback, 1000);
					}
				}
			}
			type();
		}
		
		function deleteText(element, speed, callback, cursorElement) {
			var text = element.textContent;
			var i = text.length;
			if (cursorElement) cursorElement.style.opacity = '1';
			
			function deleteChar() {
				if (i > 0) {
					element.textContent = text.substring(0, i - 1);
					i--;
					setTimeout(deleteChar, speed);
				} else {
					if (callback) {
						setTimeout(callback, 500);
					}
				}
			}
			deleteChar();
		}
		
		// Initialize typing effect for title only
		var titleElement = document.getElementById('typing-title');
		
		if (titleElement) {
			var titleText = 'مرحباً، أنا مطور مواقع ويب';
			var titleCursor = titleElement.nextElementSibling;
			
			// Function to loop title typing
			function loopTitle() {
				deleteText(titleElement, 30, function() {
					typeWriter(titleElement, titleText, 100, function() {
						setTimeout(loopTitle, 3000);
					}, titleCursor);
				}, titleCursor);
			}
			
			// Start typing title
			typeWriter(titleElement, titleText, 100, function() {
				// After title is typed, wait then start looping
				setTimeout(loopTitle, 3000);
			}, titleCursor);
		}
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		
			// Mobile Menu  //
		$(function(){
			$('#nav').slicknav({
				'label' : '',
				'prependTo': '.mobile-menu',
				
			});
		});

		
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:4500,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		});
		
		$('.testimonial-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			animateIn:'fadeIn',
			animateOut:'fadeOut',
			loop:true,
			merge:true,
			nav:true,
			navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
			dots:true,
			rtl: true
		});
		
		
		//  Portfolio Gallery Thumbnail Click //
		$('.thumb-item').on('click', function(e) {
			e.preventDefault();
			var imageSrc = $(this).data('image');
			if (imageSrc) {
				$('#main-project-image').attr('src', imageSrc);
				$('.thumb-item').removeClass('active');
				$(this).addClass('active');
			}
		});
		
		// Load project data from URL parameter
		var urlParams = new URLSearchParams(window.location.search);
		var projectId = urlParams.get('project');
		if (projectId) {
			// يمكن إضافة بيانات المشاريع هنا
			loadProjectData(projectId);
		}
		
		function loadProjectData(projectId) {
			// بيانات المشاريع
			var projects = {
				'1': {
					title: 'موقع شركة تجارية',
					description: 'مشروع موقع شركة احترافي تم تطويره باستخدام أحدث تقنيات الويب. يقدم حلولاً متكاملة للشركات الراغبة في تعزيز حضورها الرقمي.',
					fullDescription: 'تم التركيز على تصميم متجاوب يعمل على جميع الأجهزة من الهواتف المحمولة إلى أجهزة الكمبيوتر المكتبية. كما تم الاهتمام بسرعة التحميل وتحسين الأداء لضمان أفضل تجربة ممكنة للمستخدمين. تم تطوير لوحة تحكم سهلة الاستخدام تتيح للعملاء إدارة محتوى الموقع بسهولة.',
					tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
					features: [
						'تصميم متجاوب يعمل على جميع الأجهزة',
						'سرعة تحميل عالية',
						'واجهة مستخدم سهلة ومريحة',
						'تحسين محركات البحث (SEO)',
						'أمان عالي',
						'لوحة تحكم سهلة الاستخدام'
					],
					date: 'يناير 2024',
					client: 'شركة تجارية',
					category: 'تطوير مواقع',
					duration: '3 أشهر',
					team: 'مطور واحد',
					url: 'https://www.example.com',
					github: null,
					challenges: 'واجهنا تحديات في تحسين أداء الموقع مع المحافظة على التصميم الجذاب. تم حل هذه المشكلة من خلال تحسين الكود واستخدام تقنيات التخزين المؤقت.',
					objectives: 'تم تحقيق جميع الأهداف المحددة بنجاح: زيادة عدد الزوار بنسبة 40%، تحسين سرعة التحميل بنسبة 60%، وتحسين تجربة المستخدم بشكل ملحوظ.',
					images: ['img/portfolio-1.JPG', 'img/portfolio-2.JPG']
				},
				'2': {
					title: 'متجر إلكتروني',
					description: 'متجر إلكتروني متكامل مع أنظمة الدفع والشحن. يوفر تجربة تسوق سلسة وآمنة للعملاء.',
					fullDescription: 'تم تطوير متجر إلكتروني متكامل مع دعم أنظمة الدفع المتعددة والشحن الدولي. يتضمن نظام إدارة مخزون متقدم وتقارير مبيعات شاملة.',
					tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JavaScript'],
					features: [
						'نظام دفع متعدد',
						'شحن دولي',
						'إدارة مخزون متقدمة',
						'تقارير مبيعات',
						'لوحة تحكم شاملة',
						'دعم متعدد اللغات'
					],
					date: 'فبراير 2024',
					client: 'عميل خاص',
					category: 'متاجر إلكترونية',
					duration: '4 أشهر',
					team: 'مطور واحد',
					url: 'https://www.example.com',
					github: null,
					challenges: 'تحدي دمج أنظمة الدفع المختلفة مع ضمان الأمان. تم حل ذلك من خلال استخدام APIs موثوقة وتطبيق معايير الأمان العالمية.',
					objectives: 'زيادة المبيعات بنسبة 50%، تحسين تجربة التسوق، وتقليل معدل التسرب من سلة التسوق.',
					images: ['img/portfolio-2.JPG']
				},
				'9': {
					title: 'موقع أكاديمية اينوفا للتدريب والاستشارات – دبي',
					description: 'مشروع تصميم وتطوير الموقع الرسمي لأكاديمية اينوفا للتدريب والاستشارات في دبي، وهي مؤسسة رائدة في مجال التدريب والتطوير المؤسسي.',
					fullDescription: 'مشروع تصميم وتطوير الموقع الرسمي لأكاديمية اينوفا للتدريب والاستشارات في دبي، وهي مؤسسة رائدة في مجال التدريب والتطوير المؤسسي. تم بناء الموقع باستخدام Next.js 14 وReact بتصميم حديث يعتمد على Tailwind CSS ويتميز بتجربة مستخدم سلسة، ودعم كامل للغة العربية (RTL) والإنجليزية. يقدّم الموقع واجهة عصرية تعكس هوية الأكاديمية المهنية، ويعرض خدماتها التدريبية والاستشارية، وخططها السنوية، والاعتمادات الدولية المعتمدة لديها، بالإضافة إلى مكتبة برامج تدريبية يمكن استعراضها بسهولة. تم التركيز على سهولة التصفح، والسرعة العالية في الأداء، والتكامل البصري بين جميع الصفحات، مع تصميم متجاوب يعمل بانسيابية على جميع الأجهزة. يشمل الموقع صفحات احترافية متكاملة مثل الصفحة الرئيسية التفاعلية مع سلايدر للخطة التدريبية 2025، وصفحة "عن اينوفا" التي تسلط الضوء على الرؤية والقيم والرسالة، ومكتبة البرامج التدريبية المقسمة حسب المجالات، وصفحة الاعتمادات الدولية بواجهة منظمة وشعارات معتمدة عالميًا، وقسم الأخبار والإنجازات، ونموذج تواصل مباشر مع الفروع (دبي – القاهرة – الرياض). تم تنفيذ المشروع وفق أعلى معايير UI/UX الحديثة، مع استخدام ألوان هوية بصرية مستوحاة من التدرجات الزرقاء لتجسيد الثقة والمهنية، مما جعل الموقع واجهة رقمية تليق بمؤسسة تدريب رائدة في الشرق الأوسط.',
					tech: ['Next.js', 'React', 'Tailwind CSS', 'MySQL'],
					features: [
						'تصميم حديث يعتمد على Next.js 14 وReact',
						'دعم كامل للغة العربية (RTL) والإنجليزية',
						'واجهة عصرية تعكس الهوية المهنية',
						'مكتبة برامج تدريبية منظمة',
						'صفحة اعتمادات دولية',
						'نموذج تواصل مباشر مع الفروع',
						'تصميم متجاوب يعمل على جميع الأجهزة',
						'سرعة عالية في الأداء'
					],
					date: 'يوليو 2025',
					client: 'أكاديمية اينوفا للتدريب والاستشارات',
					category: 'تطوير مواقع',
					duration: '3 أشهر',
					team: 'مطور واحد',
					url: 'https://inova-academy.vercel.app',
					github: null,
					challenges: 'تطوير موقع متعدد اللغات مع دعم كامل للغة العربية (RTL) والإنجليزية، مع الحفاظ على الأداء العالي والتصميم الجذاب. تم حل ذلك من خلال استخدام Next.js 14 مع Tailwind CSS واتباع أفضل الممارسات في تطوير المواقع المتعددة اللغات.',
					objectives: 'إنشاء واجهة رقمية احترافية تعكس هوية الأكاديمية المهنية، مع التركيز على سهولة التصفح والسرعة العالية في الأداء، وتوفير تجربة مستخدم ممتازة على جميع الأجهزة.',
					images: [
						'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54a8684d87/215-Recovered.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fc288b0/inova-academy.vercel.app9.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fc64eab/inova-academy.vercel.app8.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fca2254/FireShot-Capture-032-الرئيسية-اينوفا-للتدريب-والاستشارات-inova-academy.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fce076c/inova-academy.vercel.app7.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fd292f5/inova-academy.vercel.app6.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fd72280/inova-academy.vercel.app5.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fda9749/inova-academy.vercel.app4.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fde5680/inova-academy.vercel.app3.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fe2f711/inova-academy.vercel.app2.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fe727a3/inova-academy.vercel.app1.jpg'
					]
				},
				'10': {
					title: 'نظام إدارة زبائن مدينة ألعاب ترفيهية واستراحات',
					description: 'نظام إدارة متكامل لمدينة الألعاب مبني باستخدام Next.js 14، TypeScript، وTailwind CSS مع واجهة عربية كاملة.',
					fullDescription: 'نظام إدارة متكامل لمدينة الألعاب مبني باستخدام Next.js 14، TypeScript، وTailwind CSS مع واجهة عربية كاملة. يتضمن النظام نظام مصادقة آمن للمستخدمين مع دعم أدوار متعددة (مدير، موظف استقبال) وإدارة مستخدمين غير محدودة. يشمل النظام إدارة دخول الزبائن مع حساب تلقائي للمبالغ، وعداد تسلسلي يتصفر يومياً، وطباعة وصولات احترافية مع دعم الطابعات الحرارية. يتضمن النظام تقارير يومية وشهرية شاملة مع رسوم بيانية تفاعلية، وإمكانية تصدير إلى PDF و Excel. يتميز النظام بواجهة مستخدم عصرية ومتجاوبة مع دعم كامل للغة العربية (RTL) وخط IBM Plex Sans Arabic للنصوص العربية.',
					tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'React Native'],
					features: [
						'نظام مصادقة آمن مع دعم أدوار متعددة',
						'إدارة مستخدمين غير محدودة',
						'تسجيل دخول الزبائن مع حساب تلقائي للمبالغ',
						'عداد تسلسلي يتصفر يومياً',
						'طباعة وصولات احترافية مع دعم الطابعات الحرارية',
						'تقارير يومية وشهرية شاملة',
						'رسوم بيانية تفاعلية',
						'تصدير إلى PDF و Excel',
						'تصميم عصري ومتجاوب',
						'دعم كامل للغة العربية (RTL)',
						'خط IBM Plex Sans Arabic للنصوص العربية'
					],
					date: 'سبتمبر 2025',
					client: 'مدينة ألعاب ترفيهية',
					category: 'أنظمة إدارة',
					duration: '2.5 أشهر',
					team: 'مطور واحد',
					url: 'https://game-site-app-two.vercel.app',
					github: null,
					challenges: 'تطوير نظام إدارة متكامل مع دعم كامل للغة العربية (RTL) وتكامل مع الطابعات الحرارية. تم حل ذلك من خلال استخدام Next.js 14 مع TypeScript وTailwind CSS واتباع أفضل الممارسات في تطوير أنظمة الإدارة.',
					objectives: 'إنشاء نظام إدارة متكامل لمدينة الألعاب يسهل إدارة الزبائن والعمليات اليومية مع توفير تقارير شاملة وإحصائيات دقيقة.',
					images: [
						'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54f9596f28/201.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6d9af0be/FireShot-Capture-024-نظام-إدارة-مدينة-الألعاب-game-site-app-two.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6d9ee12a/FireShot-Capture-022-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6da38d17/FireShot-Capture-021-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6da7a29c/FireShot-Capture-023-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6dab4d72/FireShot-Capture-019-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6db06d56/FireShot-Capture-018-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b86032b50/Screenshot-2025-10-17-224014.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b860732c1/Screenshot-2025-10-17-224206.png'
					]
				},
				'11': {
					title: 'منصة Taḥkīm لتحكيم البحوث الأكاديمية',
					description: 'منصة متكاملة لتحكيم البحوث الأكاديمية مع إدارة كاملة للمستخدمين والدعوات البحثية والأبحاث والتحكيم.',
					fullDescription: 'منصة Taḥkīm هي منصة متكاملة لتحكيم البحوث الأكاديمية تم تطويرها لتسهيل عملية التحكيم العلمي. تتضمن المنصة نظام إدارة متكامل للمستخدمين (مديرين، محكمين، باحثين) مع صلاحيات مختلفة. تشمل المنصة إدارة الدعوات البحثية مع تحديد المعايير والجدول الزمني، وإدارة الأبحاث المقدمة مع تعيين المحكمين ومتابعة عملية التحكيم. توفر المنصة واجهات متخصصة للمديرين لإدارة المستخدمين والدعوات والأبحاث، ولوحة تحكم للمحكمين لاستعراض وتقييم الأبحاث المسندة إليهم، وواجهة للباحثين لتقديم الأبحاث ومتابعة حالتها. تتضمن المنصة أيضاً نظام تقارير وإحصائيات متقدم، وإدارة المدفوعات، ونظام متابعة التعديلات. تم تطوير المنصة باستخدام PHP و JavaScript و MySQL مع واجهة عربية كاملة.',
					tech: ['PHP', 'JavaScript', 'MySQL'],
					features: [
						'نظام إدارة متكامل للمستخدمين مع صلاحيات مختلفة',
						'إدارة الدعوات البحثية مع تحديد المعايير والجدول الزمني',
						'إدارة الأبحاث المقدمة مع تعيين المحكمين',
						'واجهة متخصصة للمحكمين لتقييم الأبحاث',
						'واجهة للباحثين لتقديم الأبحاث ومتابعة حالتها',
						'نظام تقارير وإحصائيات متقدم',
						'إدارة المدفوعات',
						'نظام متابعة التعديلات',
						'لوحة تحكم شاملة للمديرين',
						'دعم كامل للغة العربية'
					],
					date: 'مارس 2025',
					client: 'مؤسسة أكاديمية',
					category: 'منصات أكاديمية',
					duration: '4 أشهر',
					team: 'مطور واحد',
					url: null,
					github: null,
					challenges: 'تطوير منصة متكاملة تدعم عدة أدوار مستخدمين مع صلاحيات مختلفة وتدفقات عمل معقدة. تم حل ذلك من خلال تصميم نظام إدارة مرن وقابل للتوسع مع واجهات مستخدم متخصصة لكل دور.',
					objectives: 'إنشاء منصة متكاملة تسهل عملية تحكيم البحوث الأكاديمية مع توفير أدوات إدارة شاملة للمديرين والمحكمين والباحثين.',
					images: [
						'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f551db9a97f/201.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e629b1c9e/photo15.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62a089e8/photo14.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62a510a9/photo13.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62a965e5/photo14.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62adae84/photo12.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62b2f378/photo11.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62b6e081/photo10.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62bc7062/photo08.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62c23e01/photo09.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62c6d5b6/photo07.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62ccc9f3/photo17.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62d1d2de/photo06.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62d64595/photo05.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62da75cb/photo04.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62df3c13/photo01.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62e4f0b1/photo03.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62e98401/photo02.jpg'
					]
				},
				'12': {
					title: 'منصة المجدد للأرشقة الالكترونية',
					description: 'نظام أرشقة إلكترونية خاص بمركز المجدد للبحوث والدراسات، يقوم بتخزين وحفظ وفهرسة الوثائق والملفات إلكترونياً وإصدار تقارير تفصيلية.',
					fullDescription: 'نظام أرشقة إلكترونية خاص بمركز المجدد للبحوث والدراسات، يقوم بتخزين وحفظ وفهرسة الوثائق والملفات إلكترونياً وإصدار تقارير تفصيلية لجميع البيانات المختلفة وإمكانية استعراضها في أي وقت ومن أي مكان، ومتابعة أعمال الدورة المستندية للبحوث، التدقيق اللغوي، التصميم، والنشر. كما يقوم بإرشفة البريد الصادر/ الوارد. يتضمن النظام فهرسة وتخزين الوثائق في المخزن الدائم للنظام بالطرق المتعددة للتخزين واسترجاعها في أي وقت ومن أي مكان على شبكة العمل وبالطرق المتعددة للقراءة. كما يتضمن إدارة جميع عمليات الوثائق والسجلات والمستخدمين والمجموعات والصلاحيات مع مراقبة آلية دقيقة لعمل كل المستخدمين من قبل مدير النظام. ويتضمن أيضاً إصدار تقارير تلخيصية وتفصيلية لوثائق المنشأة ومحتوياتها وتقسيماتها وبياناتها المختلفة.',
					tech: ['PHP', 'CSS', 'Bootstrap'],
					features: [
						'فهرسة وتخزين الوثائق في المخزن الدائم',
						'استرجاع الوثائق في أي وقت ومن أي مكان',
						'إدارة عمليات الوثائق والسجلات',
						'إدارة المستخدمين والمجموعات والصلاحيات',
						'مراقبة آلية دقيقة لعمل المستخدمين',
						'إصدار تقارير تلخيصية وتفصيلية',
						'متابعة الدورة المستندية للبحوث',
						'إرشفة البريد الصادر/ الوارد',
						'دعم متعدد للطرق التخزين والقراءة',
						'واجهة سهلة الاستخدام'
					],
					date: 'مارس 2022',
					client: 'مركز المجدد للبحوث والدراسات',
					category: 'أنظمة أرشفة',
					duration: '5 أشهر',
					team: 'مطور واحد',
					url: 'https://almojaded.com',
					github: null,
					challenges: 'تطوير نظام أرشفة متكامل يدعم فهرسة وتخزين واسترجاع الوثائق بشكل آمن وفعال. تم حل ذلك من خلال تصميم نظام تخزين مرن مع فهرسة متقدمة وإدارة صلاحيات شاملة.',
					objectives: 'إنشاء نظام أرشفة إلكتروني متكامل يسهل إدارة الوثائق والملفات مع توفير تقارير شاملة وإمكانية الوصول الآمن من أي مكان.',
					images: [
						'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f4154912076/202510182330نموذج-ثلاثي-الأبعاد-للموقعremix01k7wq1bz1fjq82rexxxcs80f7.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e829c9d86/FireShot-Capture-014-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82a1b22e/FireShot-Capture-016-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82a640c7/FireShot-Capture-013-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82aac572/FireShot-Capture-012-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82aeee80/FireShot-Capture-011-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82b439f1/FireShot-Capture-010-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82b89f84/FireShot-Capture-009-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg'
					]
				},
				'13': {
					title: 'نظام PaperMetrix لتقييم وتوصية الاوراق البحثية',
					description: 'منصة توصية علمية تُسهّل على الباحثين اكتشاف أفضل المقالات العربية والإنجليزية عبر دمج القياسات البديلة والتصويت المجتمعي ومحرّك توصية هجيني.',
					fullDescription: 'منصة توصية علمية تُسهّل على الباحثين اكتشاف أفضل المقالات العربية والإنجليزية عبر دمج القياسات البديلة (قراءات Mendeley، مشاركات، مشاهدات، حفظ)، والتصويت المجتمعي الشبيه بـ Reddit (Up/Down-votes مع نظام سمعة)، ومحرّك توصية هجيني يجمع بين تشابه المحتوى والتصفية التعاونية وإعادة ترتيب مبنية على الجودة والحداثة. يتضمن النظام تقييم المقالات عبر درجة المحتوى (Content Score) باستخدام تمثيلات دلالية (TF-IDF/Embeddings)، ودرجة التفاعل (Engagement/Altmetrics) من قرّاء Mendeley والتنزيلات والمشاركات، ودرجة المجتمع (Community) من تصويتات المستخدمين مع Wilson score أو Bayesian average، وعامل الزمن (Recency Decay) للحفاظ على حداثة النتائج. يشمل النظام محرك توصية هجيني يجمع بين Content-Based باستخدام Embeddings/موضوعات (LDA/BERT)، وCollaborative Filtering من سجلات التصويت والحفظ، وإعادة ترتيب ذكية توازن بين الصلة والجودة والتنوع الموضوعي. يتميز النظام بواجهة مستخدم متكاملة مع صفحة اكتشاف بموجّهات موضوعية، وتصويت فوري وحفظ لقوائم القراءة، ولوحات وتقارير مع مؤشرات Altmetrics، وتكاملات مع Mendeley API وCrossref/DOI. تم تطوير النظام باستخدام Django 5 + Django REST Framework (DRF) للواجهة، وPython FastAPI للخلفية، وPostgreSQL للبيانات، وRedis للتخزين المؤقّت والطوابير.',
					tech: ['Django', 'Python', 'PostgreSQL'],
					features: [
						'دمج القياسات البديلة (Altmetrics) مع التصويت المجتمعي',
						'محرّك توصية هجيني (Content-Based + Collaborative Filtering)',
						'نظام تقييم متقدم للمقالات (محتوى + تفاعل + مجتمع + زمن)',
						'صفحة اكتشاف بموجّهات موضوعية',
						'تصويت فوري وحفظ لقوائم القراءة',
						'نظام سمعة ونقاط إنجاز للمستخدمين',
						'توصيات شخصية "لأجلك" + "رائج الآن"',
						'لوحات وتقارير مع مؤشرات Altmetrics',
						'تكامل مع Mendeley API وCrossref/DOI',
						'استيراد BibTeX/CSV وتصدير البيانات'
					],
					date: 'مايو 2023',
					client: 'مشروع تخرجي في جامعة اسطنبول (أطروحة دكتوراه)',
					category: 'منصات أكاديمية',
					duration: '6 أشهر',
					team: 'مطور واحد',
					url: 'https://paper-metrix.herokuapp.com',
					github: null,
					challenges: 'تطوير نظام تقييم متقدم يجمع بين معالجة اللغة الطبيعية (NLP) والتصفية التعاونية مع الحفاظ على الأداء العالي. تم حل ذلك من خلال استخدام تمثيلات دلالية متقدمة (BERT/sentence-transformers) مع تحسينات في قاعدة البيانات وتخزين مؤقت ذكي.',
					objectives: 'إنشاء منصة توصية علمية متكاملة تسهل على الباحثين اكتشاف أفضل المقالات العلمية العربية والإنجليزية مع نظام تقييم دقيق يعتمد على القياسات البديلة والتصويت المجتمعي.',
					images: [
						'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c2be93720a/papermetrix.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4924e57/FireShot-Capture-166-paper-metrix.herokuapp.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef495b0cc/FireShot-Capture-167-paper-metrix.herokuapp.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef49a72b6/FireShot-Capture-168-paper-metrix.herokuapp.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef49e1d2f/FireShot-Capture-170-paper-metrix.herokuapp.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4a4607c/FireShot-Capture-172-paper-metrix.herokuapp.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4a83f2f/FireShot-Capture-173-paper-metrix.herokuapp.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4ac8427/FireShot-Capture-174-paper-metrix.herokuapp.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4b0c6bf/FireShot-Capture-177-paper-metrix.herokuapp.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4b48d46/FireShot-Capture-175-paper-metrix.herokuapp.com.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4b8b1ce/FireShot-Capture-179-paper-metrix.herokuapp.com.jpg'
					]
				},
				'14': {
					title: 'نظام إدارة متكامل لمتجر عطور',
					description: 'نظام إدارة متكامل لمتاجر العطور يجمع بين الأداء العالي والفخامة البصرية، مستوحى من أسلوب Soft Luxury UI الممزوج بلمسات Scandinavian Design.',
					fullDescription: 'تم تطوير نظام إدارة متكامل لمتاجر العطور يجمع بين الأداء العالي والفخامة البصرية، مستوحى من أسلوب Soft Luxury UI for Lifestyle Brands الممزوج بلمسات Scandinavian Design التي تركز على البساطة والنظافة ودفء الألوان. يتيح النظام إدارة شاملة لكل عمليات المتجر من واجهة واحدة سهلة الاستخدام وتشمل إدارة المنتجات والتصنيفات والعلامات التجارية، وإدارة المخزون والتنبيهات الذكية عند قرب نفاد المنتجات، ونظام مبيعات وفواتير احترافي بطباعة PDF (A4 وحرارية)، وإدارة العملاء والفواتير السابقة وسجل المشتريات، وتقارير وإحصائيات تفاعلية للمبيعات والأرباح والمنتجات الأكثر مبيعًا، ونظام صلاحيات متقدم (مالك، مدير، أمين مخزن، بائع)، ودعم الباركود Code128 / EAN-13 لكل منتج، وتنبيهات وإشعارات داخلية وخارجية عبر البريد أو واتساب. تم تنفيذ النظام باستخدام أحدث تقنيات الويب لتحقيق تجربة استخدام فاخرة وسريعة، مع واجهة عربية (RTL) متكاملة تتوافق مع مختلف الأجهزة.',
					tech: ['Next.js', 'Tailwind CSS', 'MySQL'],
					features: [
						'إدارة المنتجات والتصنيفات والعلامات التجارية',
						'إدارة المخزون مع تنبيهات ذكية عند قرب النفاد',
						'نظام مبيعات وفواتير احترافي',
						'طباعة PDF (A4 وحرارية)',
						'إدارة العملاء والفواتير السابقة',
						'تقارير وإحصائيات تفاعلية',
						'نظام صلاحيات متقدم (مالك، مدير، أمين مخزن، بائع)',
						'دعم الباركود Code128 / EAN-13',
						'تنبيهات وإشعارات عبر البريد أو واتساب',
						'تصميم فاخر مستوحى من Soft Luxury UI',
						'واجهة عربية (RTL) متكاملة'
					],
					date: 'أغسطس 2025',
					client: 'متجر عطور',
					category: 'أنظمة إدارة',
					duration: '4 أشهر',
					team: 'مطور واحد',
					url: 'https://parfum-cms.vercel.app',
					github: null,
					challenges: 'تطوير نظام إدارة متكامل مع دعم الباركود وطباعة الفواتير مع الحفاظ على الأداء العالي والتصميم الفاخر. تم حل ذلك من خلال استخدام Next.js 15 مع App Router وPrisma ORM وshadcn/ui لتحقيق واجهة فاخرة وسريعة.',
					objectives: 'إنشاء نظام إدارة متكامل لمتاجر العطور يجمع بين الفخامة البصرية والأداء العالي مع دعم كامل للعمليات التجارية اليومية.',
					images: [
						'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c334f66a34/ParfumCMS.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3350785d2/FireShot-Capture-052-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3350b9cae/FireShot-Capture-053-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3351010ed/FireShot-Capture-050-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3351413d8/FireShot-Capture-049-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c33518e69a/FireShot-Capture-047-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3351d972e/FireShot-Capture-048-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c335222145/FireShot-Capture-046-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c335263d06/FireShot-Capture-045-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3352c86c9/download.png'
					]
				},
				'15': {
					title: 'منصة بودكاست عربية',
					description: 'منصة بودكاست عربية حديثة متكاملة لإدارة البرامج والحلقات الصوتية، باستخدام React.js (Next.js 14) وMySQL مع واجهة عربية متجاوبة ودعم كامل لاتجاه RTL.',
					fullDescription: 'قمت بتصميم وتطوير منصة بودكاست عربية حديثة متكاملة لإدارة البرامج والحلقات الصوتية، باستخدام React.js (Next.js 14) وMySQL مع واجهة عربية متجاوبة ودعم كامل لاتجاه RTL. المنصة تم بناؤها لتكون مركزًا موحدًا للبودكاست العربي، وتتيح للمستخدمين استكشاف البرامج والحلقات بسهولة، وتشغيل الحلقات عبر مشغل صوتي مدمج ومتطور، والتفاعل عبر الإعجابات والتعليقات، وحفظ الحلقات المفضلة وتتبع التقدم في الاستماع. كما تحتوي على لوحة تحكم إدارية (Admin Dashboard) تمكّن المدير من إدارة البرامج والحلقات والمستخدمين والتصنيفات، ومتابعة الإحصائيات (عدد المستمعين، الإعجابات، التعليقات)، والتحكم في الرعاة والضيوف وإدارة قوائم التشغيل. تم تطوير المشروع باستخدام Next.js 14 (React Framework)، TypeScript و Tailwind CSS، Prisma ORM مع MySQL Database، NextAuth.js للمصادقة وتسجيل الدخول، Swiper.js لعرض البرامج في شكل Carousel تفاعلي، وAudioPlayerContext لإدارة المشغل الصوتي بشكل موحد. يتميز التصميم بأنه متجاوب بالكامل للهواتف والأجهزة اللوحية، مع دعم كامل للغة العربية (RTL)، وواجهات عصرية بتأثيرات أنيميشن وانسيابية، وCarousel تفاعلي للبرامج المميزة يعرض البرنامج الرئيسي في المنتصف بشكل أكبر وأكثر وضوحًا، ومشغل صوتي متكامل مع إمكانية إضافة الحلقات لقائمة التشغيل.',
					tech: ['Next.js', 'TypeScript', 'MySQL'],
					features: [
						'استكشاف البرامج والحلقات بسهولة',
						'مشغل صوتي مدمج ومتطور',
						'نظام إعجابات وتعليقات',
						'حفظ الحلقات المفضلة وتتبع التقدم',
						'لوحة تحكم إدارية متكاملة',
						'إدارة البرامج والحلقات والمستخدمين',
						'متابعة الإحصائيات والتحليلات',
						'Carousel تفاعلي للبرامج المميزة',
						'تصميم متجاوب بالكامل',
						'دعم كامل للغة العربية (RTL)',
						'واجهات عصرية بتأثيرات أنيميشن'
					],
					date: 'أبريل 2025',
					client: 'عميل خاص',
					category: 'منصات صوتية',
					duration: '3 أشهر',
					team: 'مطور واحد',
					url: null,
					github: null,
					challenges: 'تطوير مشغل صوتي متكامل مع دعم قوائم التشغيل وإدارة الحالة بشكل موحد عبر Context API. تم حل ذلك من خلال إنشاء AudioPlayerContext متقدم يدير حالة التشغيل والحلقات الحالية والقوائم مع الحفاظ على الأداء العالي.',
					objectives: 'إنشاء منصة بودكاست عربية متكاملة تجمع بين جمال التصميم وسلاسة الاستخدام وقوة الأداء، وتوفر تجربة مميزة لكل من المستمعين والمديرين.',
					images: [
						'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c3459c2e3b/Podcast.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e2913fc02/FireShot-Capture4.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e291a113d/FireShot-Capture5.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e291de3a2/FireShot-Capture3.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e2923b677/FireShot-Capture1.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e29295aba/FireShot-Capture2.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e292df064/download.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e29315a8a/download.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e2933f49f/Screenshot-2025-05-21-220726.png'
					]
				},
				'16': {
					title: 'منصة ادارة مهام ومتابعة اعمال لمجموعة استثمارية',
					description: 'نظام متكامل لإدارة المهام والوحدات الاستثمارية لمجموعة استشارية باستخدام Next.js وReact.js مع قاعدة بيانات MySQL، بهدف تحسين كفاءة العمل الداخلي ومتابعة الأداء المالي والإداري.',
					fullDescription: 'قمت بتصميم وتطوير نظام متكامل لإدارة المهام والوحدات الاستثمارية لمجموعة استشارية باستخدام Next.js وReact.js مع قاعدة بيانات MySQL، بهدف تحسين كفاءة العمل الداخلي ومتابعة الأداء المالي والإداري عبر لوحة تحكم موحدة ومتكاملة. يتضمن النظام لوحة تحكم المدير العام مع نظرة شاملة على أداء النظام والمشاريع والمهام الحرجة أو المتأخرة، ووحدة إدارة الموظفين لمتابعة أداء الفرق وقياس الرضا والإنتاجية وتقييم الأداء بنظام نقاط دقيق، ووحدة التقارير والإحصاءات لإنشاء تقارير أسبوعية وشهرية وتصديرها بصيغ PDF / Excel / CSV مع مؤشرات تحليلية ذكية، ووحدة التحليلات المتقدمة لعرض مؤشرات الأداء للموظفين والمشاريع والوحدات عبر لوحات رسومية تفاعلية. كما يشمل النظام إدارة النظام والصلاحيات بنظام أدوار وصلاحيات مرن، وإدارة العلاقات لربط المستخدمين بالوحدات الاستثمارية وتعيين المسؤولين والمشرفين، وإدارة الإشعارات لإرسال تنبيهات وتحذيرات أو إشعارات نجاح لجميع المستخدمين أو لوحدات محددة، ووحدة الطلبات والموافقات لنظام متكامل لتقديم الطلبات (رواتب، تدريب، دعم تقني، استشارة...) ومتابعة مراحل الموافقة، ومكتبة الموارد لإدارة ومشاركة الملفات والمستندات والفيديوهات بين فرق العمل بسهولة وأمان. تم تطوير المشروع باستخدام Next.js 14 / React.js، TypeScript، Tailwind CSS لتصميم واجهات أنيقة ومتجاوبة، Prisma ORM + MySQL لإدارة قواعد البيانات، NextAuth.js لتسجيل الدخول والصلاحيات، Recharts / Chart.js للتحليلات المرئية، وNode.js API Routes لمعالجة العمليات الخلفية. المنصة توفر بيئة رقمية ذكية وموحدة لإدارة المهام والمشاريع والموظفين والتقارير داخل المجموعة الاستثمارية، مع واجهة عربية كاملة ودعم للوضع الليلي والتصميم العصري بأسلوب Glassmorphism.',
					tech: ['Next.js', 'TypeScript', 'MySQL'],
					features: [
						'لوحة تحكم المدير العام مع نظرة شاملة',
						'وحدة إدارة الموظفين وتقييم الأداء',
						'وحدة التقارير والإحصاءات مع تصدير PDF/Excel/CSV',
						'وحدة التحليلات المتقدمة مع لوحات رسومية',
						'نظام أدوار وصلاحيات مرن',
						'إدارة العلاقات والوحدات الاستثمارية',
						'نظام إشعارات متكامل',
						'وحدة الطلبات والموافقات',
						'مكتبة الموارد للملفات والمستندات',
						'واجهة عربية كاملة مع دعم الوضع الليلي',
						'تصميم عصري بأسلوب Glassmorphism'
					],
					date: 'نوفمبر 2024',
					client: 'مجموعة استثمارية',
					category: 'أنظمة إدارة',
					duration: '4 أشهر',
					team: 'مطور واحد',
					url: null,
					github: null,
					challenges: 'تطوير نظام متكامل لإدارة المهام والموظفين والتقارير مع الحفاظ على الأداء العالي والأمان. تم حل ذلك من خلال استخدام Next.js مع Server-Side Rendering وتحسينات قاعدة البيانات مع Prisma ORM وتخزين مؤقت ذكي.',
					objectives: 'إنشاء منصة إدارة متكاملة تجمع بين إدارة المهام والمشاريع والموظفين والتقارير في بيئة رقمية موحدة لتحسين كفاءة العمل الداخلي ومتابعة الأداء المالي والإداري.',
					images: [
						'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c347f790e0/Inves-Platform.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5417687/Screenshot-2025-08-10-213201.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5454a6a/Screenshot-2025-08-10-213942.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5488e01/Screenshot-2025-08-10-213141.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea54d7d75/Screenshot-2025-08-10-213119.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea552924d/Screenshot-2025-08-10-213102.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea556df55/Screenshot-2025-08-10-213006.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea55ab3bf/Screenshot-2025-08-10-212941.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea55f2e54/Screenshot-2025-08-10-212921.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea564a5f0/Screenshot-2025-08-10-212852.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5688191/Screenshot-2025-08-10-212813.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea56dce3a/Screenshot-2025-08-10-212747.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea57403fa/Screenshot-2025-07-28-101804.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea57808da/Screenshot-2025-07-23-221402.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea57ce00a/Screenshot-2025-07-23-210320.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea580caa2/Screenshot-2025-07-22-141716.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea589303b/Screenshot-2025-07-15-104849.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea58d9a25/Screenshot-2025-07-15-103440.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5922e06/Screenshot-2025-07-14-204737.png',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5964619/Screenshot-2025-07-13-203413.png'
					]
				},
				'17': {
					title: 'موقع مركز المجدد للبحوث والدراسات',
					description: 'قمت بتصميم وتطوير موقع "مركز المجدد للبحوث والدراسات" (almojaded.com) على منصة ووردبريس، بهدف توفير حضور رقمي احترافي للمركز البحثي.',
					fullDescription: 'قمت بتصميم وتطوير موقع "مركز المجدد للبحوث والدراسات" (almojaded.com) على منصة ووردبريس، بهدف توفير حضور رقمي احترافي للمركز البحثي، وتمكين الزوار من الوصول السلسّ إلى أقسام المركز: «من نحن» – «الرؤية والأهداف» – «وحدات المركز» – «البحوث والدراسات» – «الفعاليات والندوات» وغيرها. يتيح الموقع تصفّح المحتوى المتنوع: مقالات رأي، تقارير، دراسات، ترجمات، مراجعات كتب، وسائط مرئية وإنفوجرافيك. كما يتضمن إمكانية الاشتراك في نشرة المركز والبقاء محدثين بالعروض والإصدارات البحثية. يتميز الموقع بتجربة مستخدم متوافقة مع مختلف الأجهزة والمتصفّحات، مع واجهة تصميم مهنية تُعبّر عن هوية المركز الأكاديمية والثقافية. تم تطوير الموقع باستخدام ووردبريس كمنصة بناء مناسبة لإدارة المحتوى البحثي والعلمي بكفاءة. يتضمن الموقع بنية معلومات واضحة مع أقسام وتصنيفات للمحتوى (دراسات، مقالات، ترجمات، فعاليات) ما يُسهّل التنقل ويُحسّن تجربة المستخدم. يتميز التصميم بواجهة مستخدم نظيفة، متوافقة مع الهوية البصرية للمركز، مع استخدام ألوان وخطوط مهنية تُعزّز مصداقية المحتوى. الموقع متجاوب بالكامل (Responsive Design) يلائم أجهزة سطح المكتب، الأجهزة اللوحية، والهواتف الذكية لضمان وصول الباحثين والمهتمين في كل مكان. يتضمن الموقع إمكانية الاشتراك والنشرة البريدية مع نموذج يسمح للزوار بإدخال الاسم والبريد الإلكتروني للاشتراك في قاعدة بيانات البريد للمركز. تم إعداد قائمة تنقّل شاملة تتبع المنطق البحثي للمركز، ما يسهّل على المستخدمين الوصول إلى المحتوى المناسب بسرعة. تم استخدام مُمارسات جيدة لتحسين الأداء (تحميل الصور، تخزين مؤقت، تحسين المحتوى) ما يسهم في تسريع عرض الصفحات وتجربة أفضل للزوار. بتسليم هذا المشروع، ساعدت مركز المجدد للبحوث والدراسات في بناء منصة رقمية متكاملة تُعزّز من عمله البحثي، وتفتح له مجالات وصول أوسع إلى الجمهور الأكاديمي العربي والباحثين، كما أسّست تجربة رقمية عالية الجودة تواكب تطلعاته في تجديد الفكر السياسي والاجتماعي.',
					tech: ['WordPress', 'PHP', 'CSS', 'Bootstrap'],
					features: [
						'تصميم متجاوب يعمل على جميع الأجهزة',
						'بنية معلومات واضحة مع أقسام وتصنيفات',
						'واجهة مستخدم نظيفة ومهنية',
						'إمكانية الاشتراك في النشرة البريدية',
						'قائمة تنقّل شاملة',
						'تحسين الأداء والسرعة',
						'هوية بصرية تعكس الهوية الأكاديمية',
						'إدارة محتوى متكاملة'
					],
					date: 'يونيو 2022',
					client: 'مركز المجدد للبحوث والدراسات',
					category: 'مواقع ووردبريس',
					duration: '2 أشهر',
					team: 'مطور واحد',
					url: 'https://almojaded.com',
					github: null,
					challenges: 'تطوير موقع بحثي أكاديمي مع الحفاظ على الهوية المهنية والتصميم الجذاب. تم حل ذلك من خلال استخدام ووردبريس مع تصميم مخصص يعكس هوية المركز الأكاديمية.',
					objectives: 'إنشاء منصة رقمية متكاملة تُعزّز من عمل المركز البحثي، وتفتح له مجالات وصول أوسع إلى الجمهور الأكاديمي العربي والباحثين.',
					images: [
						'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c863458b8c/Mojadid.jpg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c8634af84f/Screenshot6-11-202514514almojaded.com.jpeg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c863509e58/Screenshot6-11-202514615almojaded.com.jpeg',
						'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c86354c3c0/Screenshot6-11-202514344almojaded.com.jpeg'
					]
				}
			};
			
			if (projects[projectId]) {
				var project = projects[projectId];
				
				// Update title
				$('#project-title').text(project.title);
				
				// Update description
				$('#project-description').text(project.description);
				if (project.fullDescription) {
					$('#project-full-description').text(project.fullDescription);
				} else {
					$('#project-full-description').hide();
				}
				
				// Update info card
				$('#project-date').text(project.date || '-');
				$('#project-client').text(project.client || '-');
				$('#project-category').text(project.category || '-');
				
				// Update duration
				if (project.duration) {
					$('#project-duration').text(project.duration);
					$('#project-duration-item').show();
				} else {
					$('#project-duration-item').hide();
				}
				
				// Update team
				if (project.team) {
					$('#project-team').text(project.team);
					$('#project-team-item').show();
				} else {
					$('#project-team-item').hide();
				}
				
				// Update URL
				if (project.url) {
					var fullUrl = project.url.startsWith('http') ? project.url : 'https://' + project.url;
					$('#project-url-link').attr('href', fullUrl);
					$('#project-url-item').show();
				} else {
					$('#project-url-item').hide();
				}
				
				// Update GitHub
				if (project.github) {
					var githubUrl = project.github.startsWith('http') ? project.github : 'https://' + project.github;
					$('#project-github-link').attr('href', githubUrl);
					$('#project-github-item').show();
				} else {
					$('#project-github-item').hide();
				}
				
				// Update tech tags
				var techHtml = '';
				if (project.tech && project.tech.length > 0) {
					project.tech.forEach(function(tech) {
						techHtml += '<span class="tech-tag">' + tech + '</span>';
					});
				}
				$('#project-tech').html(techHtml);
				
				// Update features
				if (project.features && project.features.length > 0) {
					var featuresHtml = '';
					project.features.forEach(function(feature) {
						featuresHtml += '<li>' + feature + '</li>';
					});
					$('#project-features').html(featuresHtml);
				}
				
				// Update challenges
				if (project.challenges) {
					$('#project-challenges-content').html('<p>' + project.challenges + '</p>');
					$('#project-challenges-section').show();
				} else {
					$('#project-challenges-section').hide();
				}
				
				// Update objectives
				if (project.objectives) {
					$('#project-objectives-content').html('<p>' + project.objectives + '</p>');
					$('#project-objectives-section').show();
				} else {
					$('#project-objectives-section').hide();
				}
				
				// Update main image
				if (project.images && project.images.length > 0) {
					$('#main-project-image').attr('src', project.images[0]).show();
					$('.gallery-main a').attr('href', project.images[0]);
					
					// Update thumbnails
					var thumbsHtml = '';
					project.images.forEach(function(img, index) {
						var activeClass = index === 0 ? 'active' : '';
						thumbsHtml += '<a href="' + img + '" class="thumb-item popup-image ' + activeClass + '" data-image="' + img + '"><img src="' + img + '" alt="صورة المشروع"></a>';
					});
					$('.gallery-thumbs').html(thumbsHtml);
					
					// Show gallery after images are loaded
					$('.project-gallery').css({
						'opacity': '1',
						'visibility': 'visible',
						'transition': 'opacity 0.3s ease-in-out'
					});
					
					// Rebind click events
					$('.thumb-item').on('click', function(e) {
						e.preventDefault();
						var imageSrc = $(this).data('image');
						if (imageSrc) {
							$('#main-project-image').attr('src', imageSrc);
							$('.gallery-main a').attr('href', imageSrc);
							$('.thumb-item').removeClass('active');
							$(this).addClass('active');
						}
					});
					
					// Reinitialize Magnific Popup for new images (destroy existing instances first)
					$('.popup-image').each(function() {
						var magnificPopup = $(this).data('magnificPopup');
						if (magnificPopup) {
							magnificPopup.close();
						}
					});
					$('.popup-image').magnificPopup('destroy');
					
					// Initialize Magnific Popup for new images
					$('.popup-image').magnificPopup({
						type: 'image',
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0,1]
						},
						image: {
							titleSrc: function(item) {
								return item.el.attr('alt');
							}
						}
					});
				}
			}
		}
		
		//  Client Slider - Continuous Slow Movement //
		var clientsSlider = $('.clients-slider').owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 0,
			autoplaySpeed: 10000,
			margin: 40,
			smartSpeed: 10000,
			autoplayHoverPause: false,
			loop: true,
			nav: false,
			dots: false,
			rtl: true,
			responsive: {
				0: {
					items: 2,
					margin: 20,
					autoplaySpeed: 8000,
					smartSpeed: 8000
				},
				480: {
					items: 2,
					margin: 25,
					autoplaySpeed: 9000,
					smartSpeed: 9000
				},
				768: {
					items: 3,
					margin: 30,
					autoplaySpeed: 10000,
					smartSpeed: 10000
				},
				992: {
					items: 4,
					margin: 35,
					autoplaySpeed: 10000,
					smartSpeed: 10000
				},
				1200: {
					items: 4,
					margin: 40,
					autoplaySpeed: 10000,
					smartSpeed: 10000
				}
			}
		});
		
		// Continuous smooth movement without stopping
		setInterval(function() {
			if (clientsSlider.length && clientsSlider.hasClass('owl-loaded')) {
				clientsSlider.trigger('next.owl.carousel');
			}
		}, 2000);
		
		/*====================================
			Progressbar Appear JS
		======================================*/ 
		$('.progress.two .progress-bar').each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 3s'
			});
			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 500);
		});
		
		
		
		
		$('.counter').counterUp({
			delay: 10,
			time: 5000
			
		});
		$('.search a').on( "click", function(){
			$('.search-form').toggleClass('active');
		});
		
		
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});
	
		$('#nav').onePageNav({
			changeHash: false,
			scrollSpeed: 1000,
			filter: '',
		});

		$('.popup').magnificPopup({
			type: 'image',
			gallery:{
			enabled:true
			}
		});
		
		// Portfolio Gallery Popup
		$('.popup-image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				titleSrc: function(item) {
					return item.el.attr('alt');
				}
			}
		});
		
		// Portfolio Gallery from main page
		$('.portfolio-gallery').on('click', function(e) {
			e.preventDefault();
			var galleryId = $(this).data('gallery');
			var galleryItems = [];
			
			// Add the main image
			var mainImg = $(this).attr('href');
			var mainTitle = $(this).find('img').attr('alt') || '';
			galleryItems.push({
				src: mainImg,
				title: mainTitle
			});
			
			// Add hidden gallery images
			$('.hidden-gallery[data-gallery="' + galleryId + '"] a').each(function() {
				galleryItems.push({
					src: $(this).attr('href'),
					title: ''
				});
			});
			
			$.magnificPopup.open({
				items: galleryItems,
				type: 'image',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1]
				},
				image: {
					titleSrc: function(item) {
						return item.data.title || '';
					}
				}
			});
		});
		
		$('.popup-gallery').each(function() {
			$(this).magnificPopup({
				delegate: 'a.popup-image',
				type: 'image',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1]
				}
			});
		});
		
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		
		var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
			  // the callback is fired every time an animation is started
			  // the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		  }
		);
		wow.init();
		
		
		
		/*====================================
			Portfolio Filter Initialization
		======================================*/ 
		$(window).on('load', function() {
			// Initialize portfolio items to be visible
			$('.portfolio-items').children('div').show();
		});
		

	
		$(function () {
		  $.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		  });
		});    

		// Animate Scroll
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});

		/*====================================
			Google  Maps
		======================================*/
		var map = new GMaps({
				el: '#map',
				lat: 23.011245,
				lng: 90.884780,
				scrollwheel: false,
			});
			map.addMarker({
				lat: 23.011245,
				lng: 90.884780,
				title: 'Marker with InfoWindow',
				infoWindow: {
				content: '<p>welcome to Akhtar</p>'
			}
		
		});
		
		// Portfolio Filter
		$('.filter-menu li').on('click', function(e) {
			e.preventDefault();

			var $this = $(this);
			var filter = $this.attr('data-filter');

			// Update active class
			$('.filter-menu li').removeClass('active');
			$this.addClass('active');

			// Get all portfolio items
			var $portfolioItems = $('.portfolio-items > div');
			
			if (filter === '*') {
				// Show all items with fade effect
				$portfolioItems.fadeOut(300, function() {
					$(this).show().css('display', 'block');
				}).fadeIn(400);
			} else {
				// Remove the dot from filter to get class name
				var filterClass = filter.replace(/^\./, '');

				// Hide all items first
				$portfolioItems.fadeOut(300, function() {
					var $item = $(this);
					// Show only items with the filter class
					if ($item.hasClass(filterClass)) {
						$item.fadeIn(400).css('display', 'block');
					}
				});
			}
			
			return false;
		});
		
		// Contact Form Handler
		$('#contact-form').on('submit', function(e) {
			e.preventDefault();
			
			var $form = $(this);
			var $submitBtn = $('#submit-btn');
			var $messageDiv = $('#form-message');
			var originalText = $submitBtn.text();
			
			// Disable submit button
			$submitBtn.prop('disabled', true).text('جاري الإرسال...');
			$messageDiv.hide().removeClass('success error');
			
			// Get form data
			var formData = {
				name: $form.find('input[name="name"]').val(),
				email: $form.find('input[name="email"]').val(),
				message: $form.find('textarea[name="message"]').val()
			};
			
			// Send AJAX request
			$.ajax({
				url: 'contact.php',
				type: 'POST',
				data: formData,
				dataType: 'json',
				success: function(response) {
					if (response.success) {
						$messageDiv
							.removeClass('error')
							.addClass('success')
							.html('<i class="fa fa-check-circle"></i> ' + response.message)
							.fadeIn();
						
						// Reset form
						$form[0].reset();
					} else {
						$messageDiv
							.removeClass('success')
							.addClass('error')
							.html('<i class="fa fa-exclamation-circle"></i> ' + response.message)
							.fadeIn();
					}
				},
				error: function(xhr, status, error) {
					$messageDiv
						.removeClass('success')
						.addClass('error')
						.html('<i class="fa fa-exclamation-circle"></i> حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.')
						.fadeIn();
				},
				complete: function() {
					// Re-enable submit button
					$submitBtn.prop('disabled', false).text(originalText);
					
					// Scroll to message
					$('html, body').animate({
						scrollTop: $messageDiv.offset().top - 100
					}, 500);
				}
			});
			
			return false;
		});
		
	});
	
		
	
})(jQuery);
