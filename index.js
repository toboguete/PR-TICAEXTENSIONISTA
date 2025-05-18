window.onload = function () {
    const target = document.getElementById("subcontainteracoes");
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }
  
    if (isElementInViewport(target)) {
      console.log("Elemento já está visível na carga, não anima ainda.");
    } else {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card1 = document.getElementById("acoesnegativas");
            const card2 = document.getElementById("acoespositivas");
            if(card1) card1.style.animation = "fadeintotop 2s forwards";
            if(card2) card2.style.animation = "fadeintotop 2s forwards";
            console.log("Entrou na área visível!");
            observer.disconnect();
          }
        });
      }, { threshold: 0.1 });
  
      observer.observe(target);
    }
  };
  
