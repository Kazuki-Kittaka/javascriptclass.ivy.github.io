function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    const buttons = document.querySelectorAll('.page-button');

    // ページを切り替える
    pages.forEach((page, index) => {
        page.style.display = (index === pageNumber - 1) ? 'block' : 'none';
    });

    // ボタンのスタイルを切り替える
    buttons.forEach(button => {
        const btnPage = parseInt(button.getAttribute('data-page'));
        if (btnPage === pageNumber) {
            button.style.backgroundColor = 'gray';
            button.style.color = '#fff';
        } else {
            button.style.backgroundColor = '#000';
            button.style.color = '#fff';
        }
    });
    }
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // 初期表示は1ページ目
        showPage(1);

        var TxtRotate = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
          };
          
          TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
          
            if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
          
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
          
            var that = this;
            var delta = 300 - Math.random() * 100;
          
            if (this.isDeleting) { delta /= 2; }
          
            if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 500;
            }
          
            setTimeout(function() {
              that.tick();
            }, delta);
          };
          
          window.onload = function() {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i=0; i<elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-rotate');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
              }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
          };