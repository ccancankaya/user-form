import "./App.css";
import { useFormikContext, Formik, Form, Field, useFormik } from 'formik';
import eifel from "./images/eifel.jpg";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.png";
import pic7 from "./images/pic7.jpg";
import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import pic10 from "./images/pic10.jpg";
import pic11 from "./images/pic11.png";
import pic12 from "./images/pic12.jpg";
import pic13 from "./images/pic13.jpg";
import pic14 from "./images/pic14.jpg";
import pic15 from "./images/pic15.jpg";
import pic16 from "./images/pic16.jpg";
import pic17 from "./images/pic17.png";
import pic18 from "./images/pic18.jpg";
import pic19 from "./images/pic19.jpg";
import pic20 from "./images/pic20.jpg";

import { useState } from 'react'

function App() {
  const [visible, setVisible] = useState(true);
  const [page2Visible, setPage2Visible] = useState(false);
  const [page3Visible, setPage3Visible] = useState(false);
  const [page4Visible, setPage4Visible] = useState(false);
  const [page5Visible, setPage5Visible] = useState(false);

  const visibleToNext1 = () => {
    setVisible(!visible);
    setPage2Visible(!page2Visible)
  }
  const visibleToNext2 = () => {
    setPage2Visible(!page2Visible)
    setPage3Visible(!page3Visible)
  }

  const visibleToNext3 = () => {
    setPage3Visible(!page3Visible)
    setPage4Visible(!page4Visible)
  }

  const visibleToNext4 = () => {
    setPage4Visible(!page4Visible)
    setPage5Visible(!page5Visible)
  }

  const visibleToBack1 = () => {
    setPage5Visible(!page5Visible)
    setPage4Visible(!page4Visible)
  }
  const visibleToBack2 = () => {
    setPage4Visible(!page4Visible)
    setPage3Visible(!page3Visible)
  }

  const visibleToBack3 = () => {
    setPage3Visible(!page3Visible)
    setPage2Visible(!page2Visible)
  }

  const visibleToBack4 = () => {
    setPage2Visible(!page2Visible)
    setVisible(!visible)
  }

  return (

    <div className="container app">
      <div className="row page1">
        <div class="col-md-3 left">
          <img src={eifel} width="320" height="670" />
        </div>

        <div class="col-md-9 bg-dark right">
          <Formik
            initialValues={{
              companyName: '',
              firstAndLastName: '',
              email: '',
              phone: '',
              outdoorChecked: [],
              indoorChecked: [],
              freeText: '',
              tasarufChecked: [],
              freeText2: '',
              specialTasarufChecked: [],
              freeText3: '',
              freeText4: ''
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values.companyName));
            }}
          >
            <Form>
              <div class={`card mt-3 mb-3 pagetext ${visible ? 'visible' : 'd-none'}`}>
                <div class="card-header">
                  Kullanım şartları
                </div>
                <div class="card-body">
                  <div className="scrollable">
                    <div className={`card-text`}>
                      Güvenliğiniz bizim için önemli. Bu sebeple bizimle paylaşacağınız kişisel verileriz hassasiyetle korunmaktadır.

                      Biz, Şirket Adı, veri sorumlusu olarak, bu gizlilik ve kişisel verilerin korunması politikası ile, hangi kişisel verilerinizin hangi amaçla işleneceği, işlenen verilerin kimlerle ve neden paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebeplerimiz ile; işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda sizleri aydınlatmayı amaçlıyoruz.

                      Toplanan Kişisel Verileriniz, Toplanma Yöntemi ve Hukuki Sebebi
                      IP adresiniz ve kullanıcı aracısı bilgileriniz, sadece analiz yapmak amacıyla ve çerezler (cookies) vb. teknolojiler vasıtasıyla, otomatik veya otomatik olmayan yöntemlerle ve bazen de analitik sağlayıcılar, reklam ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları gibi üçüncü taraflardan elde edilerek, kaydedilerek, depolanarak ve güncellenerek, aramızdaki hizmet ve sözleşme ilişkisi çerçevesinde ve süresince, meşru menfaat işleme şartına dayanılarak işlenecektir.

                      Kişisel Verilerinizin İşlenme Amacı
                      Bizimle paylaştığınız kişisel verileriniz sadece analiz yapmak suretiyle; sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde yerine getirebilmek, bu hizmetlere sizin tarafınızdan ulaşılabilmesini ve maksiumum düzeyde faydalanılabilmesini sağlamak, hizmetlerimizi, ihtiyaçlarınız doğrultusunda geliştirebilmek ve sizleri daha geniş kapsamlı hizmet sağlayıcıları ile yasal çerçeveler içerisinde buluşturabilmek ve kanundan doğan zorunlulukların (kişisel verilerin talep halinde adli ve idari makamlarla paylaşılması) yerine getirilebilmesi amacıyla, sözleşme ve hizmet süresince, amacına uygun ve ölçülü bir şekilde işlenecek ve güncellenecektir.

                      Toplanan Kişisel Verilerin Kimlere ve Hangi Amaçlarla Aktarılabileceği
                      Bizimle paylaştığınız kişisel verileriniz; faaliyetlerimizi yürütmek üzere hizmet aldığımız ve/veya verdiğimiz, sözleşmesel ilişki içerisinde bulunduğumuz,iş birliği yaptığımız, yurt içi ve yurt dışındaki 3. şahıslar ile kurum ve kuruluşlara ve talep halinde adli ve idari makamlara, gerekli teknik ve idari önlemler alınması koşulu ile aktarılabilecektir.

                      Kişisel Verileri İşlenen Kişi Olarak Haklarınız
                      KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki haklarını kullanabilir:

                      Kişisel veri işlenip işlenmediğini öğrenme,
                      Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
                      Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,
                      Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,
                      Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,
                      Kişisel verilerin silinmesini veya yok edilmesini isteme,
                      (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
                      İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,
                      Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme, haklarına sahiptir.
                      Yukarıda sayılan haklarınızı kullanmak üzere email@site.com üzerinden bizimle iletişime geçebilirsiniz.
                      e paylaştığınız kişisel verileriniz sadece analiz yapmak suretiyle; sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde yerine getirebilmek, bu hizmetlere sizin tarafınızdan ulaşılabilmesini ve maksiumum düzeyde faydalanılabilmesini sağlamak, hizmetlerimizi, ihtiyaçlarınız doğrultusunda geliştirebilmek ve sizleri daha geniş kapsamlı hizmet sağlayıcıları ile yasal çerçeveler içerisinde buluşturabilmek ve kanundan doğan zorunlulukların (kişisel verilerin talep halinde adli ve idari makamlarla paylaşılması) yerine getirilebilmesi amacıyla, sözleşme ve hizmet süresince, amacına uygun ve ölçülü bir şekilde işlenecek ve güncellenecektir.

                      Toplanan Kişisel Verilerin Kimlere ve Hangi Amaçlarla Aktarılabileceği
                      Bizimle paylaştığınız kişisel verileriniz; faaliyetlerimizi yürütmek üzere hizmet aldığımız ve/veya verdiğimiz, sözleşmesel ilişki içerisinde bulunduğumuz,iş birliği yaptığımız, yurt içi ve yurt dışındaki 3. şahıslar ile kurum ve kuruluşlara ve talep halinde adli ve idari makamlara, gerekli teknik ve idari önlemler alınması koşulu ile aktarılabilecektir.

                      Kişisel Verileri İşlenen Kişi Olarak Haklarınız
                      KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki haklarını kullanabilir:

                      Kişisel veri işlenip işlenmediğini öğrenme,
                      Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
                      Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,
                      Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,
                      Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,
                      Kişisel verilerin silinmesini veya yok edilmesini isteme,
                      (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
                      İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,
                      Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme, haklarına sahiptir.
                      Yukarıda sayılan haklarınızı kullanmak üzere email@site.com üzerinden bizimle iletişime geçebilirsiniz.
                    </div>
                  </div>


                </div>
                <div class="card-footer text-end">
                  <button type="button" class="btn btn-primary" onClick={visibleToNext1}>Kabul et</button>
                </div>
              </div>

              <div class={`card mt-3 mb-3 pagetext ${page2Visible ? 'visible' : 'd-none'}`}>
                <div class="card-header">
                  Eyedius - Değer Analizi
                  3 Adımda İşyeriniz için Güvenlik ve Tasarruf Anlamında Sağlayabileceğimiz Değerleri Öğrenin.
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label for="companyName" class="form-label">Firma Adı <span style={{ color: "red" }}>*</span></label>
                    <Field type="text" name="companyName" className="form-control" />
                  </div>
                  <div class="mb-3">
                    <label for="firsAndLastName" class="form-label">İsim soyisim</label>
                    <Field type="text" name="firsAndLastName" className="form-control" />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">E-posta adresi</label>
                    <Field type="email" name="email" className="form-control" />
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Cep telefonu</label>
                    <Field type="text" name="phone" className="form-control" />
                  </div>
                </div>
                <div class="card-footer text-end">
                  <button type="button" class="btn btn-primary" onClick={visibleToBack4} style={{ marginRight: "5px" }}>Geri</button>
                  <button type="button" class="btn btn-primary" onClick={visibleToNext2}>İleri</button>
                </div>
              </div>

              <div class={`card mt-3 mb-3 pagetext ${page3Visible ? 'visible' : 'd-none'}`}>
                <div class="card-header">
                  Eyedius - Değer Analizi
                  3 Adımda İşyeriniz için Güvenlik ve Tasarruf Anlamında Sağlayabileceğimiz Değerleri Öğrenin.
                </div>
                <div class="card-body">
                  <div className="scrollable">
                    <div role="group" aria-labelledby="checkbox-group">
                      <div class="card">
                        <div class="card-header">
                          Güvenlik Kontrolleri
                        </div>
                        <div class="card-body">

                          <p class="card-text mb-3" >   Dış Alanınızda Uygulamak İstediğiniz Bir Erken Uyarı Sistemi Var mı? <span style={{ color: "red" }}>*</span></p>
                          <div className="row">
                            <div class="col-md-4">
                              <div className="card">
                                <img src={pic1} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="outdoorChecked" value="outdoorOne:true" />
                                Sınır duvarından tırmanırken ya da bariyer altından geçerken uyarı
                              </label>
                            </div>
                            <div class="col-md-4">
                              <div className="card">
                                <img src={pic2} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="outdoorChecked" value="outdoorTwo:true" />
                                Bahçe alanına izinsiz girişte uyarı
                              </label>
                            </div>
                            <div class="col-md-4">
                              <div className="card">
                                <img src={pic3} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="outdoorChecked" value="outdoorThree:true" />
                                Dış kapı önünde şüpheli durumda uyarı
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div role="group" className="mt-4" aria-labelledby="checkbox-group">
                      <div class="card">
                        <div class="card-body">
                          <p class="card-text mb-3" >İç Alanınızda Uygulamak İstediğiniz Bir Alarm İhtiyacı Var mı? <span style={{ color: "red" }}>*</span></p>
                          <div className="row">
                            <div class="col-md-4">
                              <div className="card">
                                <img src={pic4} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="indoorChecked" value="indoorOne:true" />
                                Çalışma saatleri dışında şüpheli bir kişi iş yerine girdiğinde
                              </label>
                            </div>
                            <div class="col-md-4">
                              <div className="card">
                                <img src={pic5} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="indoorChecked" value="indoorTwo:true" />
                                Günün her saati, yönetim odası, depo, muhasebe gibi bir odamıza bir kişi girdiğinde
                              </label>
                            </div>
                            <div class="col-md-4">
                              <div className="card">
                                <img src={pic6} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="indoorChecked" value="indoorThree:true" />
                                Günün her saati, ortak çalışma alanlarında yetkili bir kişinin olmaması durumu
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card mt-4">
                      <div class="card-body">
                        <p class="card-text">Bu noktalarda kameralar mevcut mu? Kamera sayısı ve model bilgisi hakkında bilgi veriniz. Varsa potansiyel kurulum zorluklarını yazınız.</p>
                        <Field as="textarea" id="topic" name="freeText" className="form-control" rows="3"></Field>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-end">
                  <button type="button" class="btn btn-primary" onClick={visibleToBack3} style={{ marginRight: "5px" }}>Geri</button>
                  <button type="button" class="btn btn-primary" onClick={visibleToNext3}>İleri</button>
                </div>
              </div>

              <div class={`card mt-3 mb-3 pagetext ${page4Visible ? 'visible' : 'd-none'}`}>
                <div class="card-header">
                  Eyedius - Değer Analizi
                  3 Adımda İşyeriniz için Güvenlik ve Tasarruf Anlamında Sağlayabileceğimiz Değerleri Öğrenin.
                </div>
                <div class="card-body">
                  <div className="scrollable">
                    <div role="group" aria-labelledby="checkbox-group">
                      <div class="card">
                        <div class="card-header">
                          Tasarruf Kontrolleri
                        </div>
                        <div class="card-body">

                          <p class="card-text mb-3" >İş Yerinizden Çıkar Çıkmaz, Aşağıdakilerden Hangilerinin Kapalı Olduğuna Emin Olmak İstersiniz?</p>
                          <div className="row">
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic7} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="tasarufCheckedOne:true" />
                                Kapılar (I: 300/ay)
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic8} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="tasarufCheckedTwo:true" />
                                Pencereler (I: 300/ay)
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic9} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="tasarufCheckedThree:true" />
                                Kombi (350/ay)
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic10} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="tasarufCheckedFour:true" />
                                Kettle ve Benzeri Mutfak Araçları (150/ay)
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic11} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="tasarufCheckedFive:true" />
                                Elektrikli Isıtıcılar (750/ay)
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic12} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="tasarufCheckedSix:true" />
                                Klima (350/ay)
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic13} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="tasarufCheckedSeven:true" />
                                Hava Perdesi (350/ay)
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic14} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="tasarufCheckedEigth:true" />
                                Işıklar (100/ay)
                              </label>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>



                    <div class="card mt-4">
                      <div class="card-body">
                        <p class="card-text">Bu cihazları kameralar görüyor mu? Kamera sayısı ve model bilgisi hakkında bilgi veriniz. Varsa potansiyel kurulum zorluklarını yazınız.</p>
                        <Field as="textarea" id="topic" name="freeText2" className="form-control" rows="3"></Field>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-end">
                  <button type="button" class="btn btn-primary" onClick={visibleToBack2} style={{ marginRight: "5px" }}>Geri</button>
                  <button type="button" class="btn btn-primary" onClick={visibleToNext4}>İleri</button>
                </div>
              </div>

              <div class={`card mt-3 mb-3 pagetext ${page5Visible ? 'visible' : 'd-none'}`}>
                <div class="card-header">
                  Eyedius - Değer Analizi
                  3 Adımda İşyeriniz için Güvenlik ve Tasarruf Anlamında Sağlayabileceğimiz Değerleri Öğrenin.
                </div>
                <div class="card-body">
                  <div className="scrollable">
                    <div role="group" aria-labelledby="checkbox-group">
                      <div class="card">
                        <div class="card-header">
                          Özel Tasarruf Kontrolleri
                        </div>
                        <div class="card-body">

                          <p class="card-text mb-3" >İş Yerinizden Çıkar Çıkmaz, Aşağıdakilerden Hangilerinin Kapalı Olduğuna Emin Olmak İstersiniz?</p>
                          <div className="row">
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic15} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="specialTasarufCheckedOne" />
                                Sizin İçin Değerli Nesne(ler)in Yerinden Alınması
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic16} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="specialTasarufCheckedTwo" />
                                Elektrikli Isıtıcı & İnsan Entegre Kontrolü
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic17} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="specialTasarufCheckedThree" />
                                Hava Perdesi & Kapı Entegre Kontrolü
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic18} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="specialTasarufCheckedFour" />
                                Klima & Kapı-Pencere Verimsizlik Uyarısı
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic19} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="specialTasarufCheckedFive" />
                                Dondurucunun Kapağı & Dolabı Açık Kalması
                              </label>
                            </div>
                            <div class="col-md-6">
                              <div className="card">
                                <img src={pic20} class="card-img-top" height="150" />
                              </div>
                              <label>
                                <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="specialTasarufCheckedSix" />
                                Dondurucunun Aniden Kapanması
                              </label>
                            </div>
                            <div class="col-md-6">

                              <label>
                                <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="specialTasarufCheckedSeven" />
                                Diğer
                              </label>
                              <div className="card">
                                <Field as="textarea" id="topic" name="freeText3" className="form-control" rows="1"></Field>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mt-4">
                      <div class="card-body">
                        <p class="card-text">Bu cihazları kameralar görüyor mu? Kamera sayısı ve model bilgisi hakkında bilgi veriniz. Varsa potansiyel kurulum zorluklarını yazınız.</p>
                        <Field as="textarea" id="topic" name="freeText4" className="form-control" rows="3"></Field>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-end">
                  <button type="button" class="btn btn-primary" onClick={visibleToBack1} style={{ marginRight: "5px" }}>Geri</button>

                  <button type="submit" class="btn btn-primary">Kaydet</button>
                </div>
              </div>
            </Form>
          </Formik>

        </div>
      </div>

    </div>
  );
}

export default App;
