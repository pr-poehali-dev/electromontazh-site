
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bolt, CheckCircle, PhoneCall, MailIcon, Award, Clock, Wrench } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Шапка */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bolt size={28} className="text-yellow-400" />
            <span className="text-2xl font-bold">ЭлектроМастер</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-yellow-300 transition-colors">Услуги</a>
            <a href="#advantages" className="hover:text-yellow-300 transition-colors">Преимущества</a>
            <a href="#contacts" className="hover:text-yellow-300 transition-colors">Контакты</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <PhoneCall size={18} className="text-yellow-400" />
            <span className="font-medium">8 (800) 555-35-35</span>
          </div>
          <Button variant="outline" className="md:hidden border-white text-white hover:bg-blue-700">
            Меню
          </Button>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative bg-blue-900 text-white py-16 md:py-28">
        <div className="container mx-auto px-4 md:flex md:items-center">
          <div className="md:w-1/2 z-10 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Профессиональный <span className="text-yellow-400">электромонтаж</span></h1>
            <p className="text-xl mb-6 text-blue-100">Выполняем любые работы по электрике в квартирах, домах и офисах. Качественно, быстро, с гарантией.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 hidden md:block">
            {/* Здесь может быть изображение */}
            <div className="bg-blue-800 rounded-lg p-10 text-center">
              <Bolt size={150} className="mx-auto text-yellow-400" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Выполняем полный комплекс электромонтажных работ для жилых и коммерческих помещений</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  <div className="mt-4">
                    <Button variant="link" className="text-blue-600 p-0">Подробнее →</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Мы гарантируем высокое качество работ и профессиональный подход к каждому проекту</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 text-yellow-500">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12">
            <div className="md:flex">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-4">Оставьте заявку</h2>
                <p className="text-blue-100 mb-6">Наш специалист свяжется с вами в течение 15 минут и проконсультирует по всем вопросам</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneCall size={20} className="text-yellow-400 mr-3" />
                    <span className="text-white">8 (800) 555-35-35</span>
                  </div>
                  <div className="flex items-center">
                    <MailIcon size={20} className="text-yellow-400 mr-3" />
                    <span className="text-white">info@elektromaster.ru</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <Input type="text" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Textarea placeholder="Опишите вашу задачу" rows={3} />
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                      Отправить заявку
                    </Button>
                  </div>
                  <p className="text-gray-500 text-sm mt-4 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Bolt size={24} className="text-yellow-400" />
                <span className="text-xl font-bold">ЭлектроМастер</span>
              </div>
              <p className="text-blue-200 max-w-xs">
                Профессиональные услуги электромонтажа в Москве и Московской области
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-4">Услуги</h3>
                <ul className="space-y-2 text-blue-200">
                  <li><a href="#" className="hover:text-white">Электромонтаж</a></li>
                  <li><a href="#" className="hover:text-white">Проектирование</a></li>
                  <li><a href="#" className="hover:text-white">Диагностика</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Компания</h3>
                <ul className="space-y-2 text-blue-200">
                  <li><a href="#" className="hover:text-white">О нас</a></li>
                  <li><a href="#" className="hover:text-white">Портфолио</a></li>
                  <li><a href="#" className="hover:text-white">Отзывы</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Контакты</h3>
                <ul className="space-y-2 text-blue-200">
                  <li>8 (800) 555-35-35</li>
                  <li>info@elektromaster.ru</li>
                  <li>г. Москва, ул. Примерная, 123</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-6 text-center md:flex md:justify-between">
            <p className="text-blue-200">© 2023 ЭлектроМастер. Все права защищены.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white mx-2">Политика конфиденциальности</a>
              <a href="#" className="text-blue-200 hover:text-white mx-2">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Данные для услуг
const services = [
  {
    title: "Электромонтаж под ключ",
    description: "Полный комплекс работ по монтажу электрики в квартирах, частных домах и офисах с нуля.",
    icon: <Wrench className="text-blue-600" />
  },
  {
    title: "Замена электропроводки",
    description: "Профессиональная замена старой проводки на новую с соблюдением всех норм безопасности.",
    icon: <Bolt className="text-blue-600" />
  },
  {
    title: "Установка и ремонт щитов",
    description: "Монтаж, подключение и ремонт электрощитов любой сложности с установкой автоматов.",
    icon: <Wrench className="text-blue-600" />
  },
  {
    title: "Устранение неисправностей",
    description: "Быстрая диагностика и устранение любых проблем с электрикой в вашем доме или офисе.",
    icon: <Bolt className="text-blue-600" />
  },
  {
    title: "Подключение техники",
    description: "Профессиональное подключение бытовой техники, электроплит, водонагревателей.",
    icon: <Wrench className="text-blue-600" />
  },
  {
    title: "Проектирование",
    description: "Разработка проектов электроснабжения для жилых и коммерческих объектов.",
    icon: <Bolt className="text-blue-600" />
  }
];

// Данные для преимуществ
const advantages = [
  {
    title: "Опытные мастера",
    description: "В нашей команде только квалифицированные электрики с опытом работы от 5 лет."
  },
  {
    title: "Гарантия качества",
    description: "Предоставляем гарантию на все выполненные работы сроком до 5 лет."
  },
  {
    title: "Соблюдение сроков",
    description: "Точно рассчитываем время работ и всегда укладываемся в оговоренные сроки."
  },
  {
    title: "Официальный договор",
    description: "Работаем по официальному договору, который защищает интересы заказчика."
  },
  {
    title: "Доступные цены",
    description: "Предлагаем конкурентные цены на рынке без скрытых платежей и наценок."
  },
  {
    title: "Аварийный выезд",
    description: "Оперативный выезд мастера в течение 1-2 часов при аварийных ситуациях."
  }
];

export default Index;
