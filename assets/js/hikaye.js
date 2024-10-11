let hikaye1 = prompt(
    "Bir sabah uyanıyorsun ve bugünü nasıl geçireceğine karar veremiyorsun. Havanın güzel olduğunu fark ediyorsun ve dışarı çıkmak istiyorsun.\nBugün Kadıköy mü, yoksa Beşiktaş mı?\n a) Kadıköy\n b) Beşiktaş"
  );
  
  if (hikaye1 === "a") {
    let hikaye2 = prompt(
      "Kadıköy'desin. Ne içmek istersin?\n a) Kahve\n b) Çay\n c) Soğuk içecek"
    );
  
    if (hikaye2 === "a") {
      console.log("Bir kahve aldın ve içmeye başladın.");
    } else if (hikaye2 === "b") {
      console.log("Bir çay aldın ve keyifle içiyorsun.");
    } else if (hikaye2 === "c") {
      console.log("Soğuk bir içecek aldın ve serinliyorsun.");
    } else {
      hikaye2 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
    }
  
    let hikaye3 = prompt(
      "Sahilde yürüyorsun. Sokak sanatçılarını izlemeye devam mı edeceksin?\n a) Evet, izlemeye devam et\n b) Hayır, yürüyüşe devam et"
    );
  
    if (hikaye3 === "a") {
      console.log("Sanatçılara katılıp müziğin tadını çıkardın.");
    } else if (hikaye3 === "b") {
      console.log("Sahilde yürümeye devam ettin.");
    } else {
      hikaye3 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
    }
  
    let hikaye4 = prompt(
      "Bir kitapçı gördün. Girmek ister misin?\n a) Evet\n b) Hayır"
    );
  
    if (hikaye4 === "a") {
      console.log("Kitapçıya girdin ve raflara bakıyorsun.");
      let hikaye5 = prompt(
        "Bir kitap buldun. Bu kitabı alacak mısın?\n a) Evet, al\n b) Hayır, başka kitaplara bak"
      );
      if (hikaye5 === "a") {
        console.log("Kitabı aldın.");
      } else if (hikaye5 === "b") {
        console.log("Başka kitaplara göz atıyorsun.");
      }
    } else if (hikaye4 === "b") {
      console.log("Yürümeye devam ettin.");
    } else {
      hikaye4 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
    }
  
    let hikaye5 = prompt(
      "Eve gitmek için vapur mu tercih edersin, metrobüs mü?\n a) Vapur\n b) Metrobüs"
    );
    if (hikaye5 === "a") {
      console.log("Vapurda denizin dalgalarını seyrederek uzaklara dalıyorsun.");
    } else if (hikaye5 === "b") {
      console.log("Metrobüste kulaklığını takarak yolculuk yapıyorsun.");
    } else {
      hikaye5 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
    }
  } else if (hikaye1 === "b") {
    let hikaye2 = prompt(
      "Beşiktaş'tasın. Kalabalık taraftarlar var. Ne yapacaksın?\n a) Kalıp izlerim\n b) Daha sakin bir yere giderim"
    );
  
    if (hikaye2 === "a") {
      console.log("Taraftarlarla vakit geçiriyorsun.");
    } else if (hikaye2 === "b") {
      console.log("Daha sakin bir yere gidiyorsun ve deniz kenarına iniyorsun.");
    } else {
      hikaye2 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
    }
  
    let hikaye3 = prompt(
      "Bir dostun mesaj gönderdi, bir kafede buluşmak ister misin?\n a) Evet, kabul et\n b) Hayır, yalnız kalayım"
    );
  
    if (hikaye3 === "a") {
      console.log("Kafeye gittin ve dostunla keyifli bir sohbet ediyorsun.");
    } else if (hikaye3 === "b") {
      console.log("Yalnız kalıp denizin tadını çıkardın.");
    } else {
      hikaye3 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
    }
  
    let hikaye4 = prompt(
      "Akşam yemeği için bir yere gitmek ister misin?\n a) Evet\n b) Hayır, eve dönmek isterim"
    );
  
    if (hikaye4 === "a") {
      let hikaye5 = prompt(
        "Akşam yemeği için nereye gitmek istersin?\n a) Balık restoranı\n b) Kebapçı"
      );
      if (hikaye5 === "a") {
        console.log("Balık restoranına gittin ve güzel bir yemek yedin.");
      } else if (hikaye5 === "b") {
        console.log("Kebapçıya gittin ve lezzetli bir kebap yedin.");
      } else {
        hikaye5 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
      }
    } else if (hikaye4 === "b") {
      console.log("Eve dönüp dinlenmeye karar verdin.");
    } else {
      hikaye4 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
    }
  
    let hikaye6 = prompt(
      "Yatağına yattın. Film mi izlersin, müzik mi dinlersin?\n a) Film\n b) Müzik"
    );
    if (hikaye6 === "a") {
      console.log("Filmi açıp uykuya dalıyorsun.");
    } else if (hikaye6 === "b") {
      console.log("Sakin müziği açıp hayallere dalıyorsun.");
    } else {
      hikaye6 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
    }
  }