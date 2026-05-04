export default function Services() {
  const services = [
    {
      icon: 'fa-laptop',
      title: 'تطوير مواقع الويب',
      description: 'تصميم وتطوير مواقع ويب متجاوبة وسريعة باستخدام أحدث التقنيات مثل HTML5, CSS3, JavaScript.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fa-shopping-cart',
      title: 'متاجر إلكترونية',
      description: 'إنشاء متاجر إلكترونية متكاملة مع أنظمة الدفع والشحن وإدارة المخزون والعملاء.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fa-wordpress',
      title: 'مواقع ووردبريس',
      description: 'تطوير مواقع باستخدام ووردبريس مع تصميم قوالب مخصصة وإضافات وظيفية.',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: 'fa-pencil',
      title: 'تصميم واجهات المستخدم',
      description: 'تصميم واجهات مستخدم جذابة وسهلة الاستخدام تركز على تجربة المستخدم وتحسين التحويلات.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fa-rocket',
      title: 'تحسين الأداء',
      description: 'تحسين سرعة مواقع الويب وأدائها لتحسين تجربة المستخدم وترتيب محركات البحث.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'fa-life-ring',
      title: 'الدعم والصيانة',
      description: 'تقديم خدمات الدعم الفني والصيانة المستمرة لضمان استمرارية عمل المواقع بكفاءة.',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section id="service" className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            خدمات
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            أقدم مجموعة متكاملة من خدمات تطوير الويب لتحويل أفكارك إلى واقع رقمي مذهل
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fa ${service.icon} text-2xl text-white`}></i>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-emerald-100 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-10 border-t border-white/20">
          <p className="text-emerald-100 text-lg mb-6">
            هل لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكنني مساعدتك في تحقيقه
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 hover:bg-emerald-50 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <i className="fa fa-comments ml-2"></i>
            اتصل بي الآن
          </a>
        </div>
      </div>
    </section>
  )
}
