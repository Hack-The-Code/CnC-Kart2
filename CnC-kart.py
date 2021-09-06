from flask import Flask, render_template, request
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')


@app.route("/about")
def about():
    return render_template('aboutus.html')

@app.route("/product1")
def product1():
    return render_template('product1.html')
@app.route("/product2")
def product2():
    return render_template('product2.html')
@app.route("/product3")
def product3():
    return render_template('product13.html')
@app.route("/product4")
def product4():
    return render_template('product4.html')
@app.route("/commingsoon")
def commingsoon():
    return render_template('commingsoon.html')

@app.route("/contact")
def contact():
    return render_template('contact-us.html')

@app.route("/account")
def account():
    return render_template('account.html')
@app.route("/account2")
def account2():
    return render_template('account_2.html')

@app.route("/product_details1")
def product_details1():
    return render_template('/product_details/product_details1.html')
@app.route("/product_details2")
def product_details2():
    return render_template('/product_details/product_details2.html')
@app.route("/product_details3")
def product_details3():
    return render_template('/product_details/product_details3.html')
@app.route("/product_details4")
def product_details4():
    return render_template('/product_details/product_details4.html')
@app.route("/product_details5")
def product_details5():
    return render_template('/product_details/product_details5.html')
@app.route("/product_details6")
def product_details6():
    return render_template('/product_details/product_details6.html')
@app.route("/product_details7")
def product_details7():
    return render_template('/product_details/product_details7.html')
@app.route("/product_details8")
def product_details8():
    return render_template('/product_details/product_details8.html')
@app.route("/product_details9")
def product_details9():
    return render_template('/product_details/product_details9.html')
@app.route("/product_details10")
def product_details10():
    return render_template('/product_details/product_details10.html')
@app.route("/product_details11")
def product_details11():
    return render_template('/product_details/product_details11.html')
@app.route("/product_details12")
def product_details12():
    return render_template('/product_details/product_details12.html')
@app.route("/product_details13")
def product_details13():
    return render_template('/product_details/product_details13.html')
@app.route("/product_details14")
def product_details14():
    return render_template('/product_details/product_details14.html')
@app.route("/product_details15")
def product_details15():
    return render_template('/product_details/product_details15.html')
@app.route("/product_details16")
def product_details16():
    return render_template('/product_details/product_details16.html')
@app.route("/product_details17")
def product_details17():
    return render_template('/product_details/product_details17.html')
@app.route("/product_details18")
def product_details18():
    return render_template('/product_details/product_details18.html')
@app.route("/product_details19")
def product_details19():
    return render_template('/product_details/product_details19.html')
@app.route("/product_details20")
def product_details20():
    return render_template('/product_details/product_details20.html')
@app.route("/product_details21")
def product_details21():
    return render_template('/product_details/product_details21.html')
@app.route("/product_details22")
def product_details22():
    return render_template('/product_details/product_details22.html')
@app.route("/product_details23")
def product_details23():
    return render_template('/product_details/product_details23.html')
@app.route("/product_details24")
def product_details24():
    return render_template('/product_details/product_details24.html')
@app.route("/product_details25")
def product_details25():
    return render_template('/product_details/product_details25.html')
@app.route("/product_details26")
def product_details26():
    return render_template('/product_details/product_details26.html')
@app.route("/product_details27")
def product_details27():
    return render_template('/product_details/product_details27.html')
@app.route("/product_details28")
def product_details28():
    return render_template('/product_details/product_details28.html')
@app.route("/product_details29")
def product_details29():
    return render_template('/product_details/product_details29.html')
@app.route("/product_details30")
def product_details30():
    return render_template('/product_details/product_details30.html')
@app.route("/product_details31")
def product_details31():
    return render_template('/product_details/product_details31.html')
@app.route("/product_details32")
def product_details32():
    return render_template('/product_details/product_details32.html')
@app.route("/product_details33")
def product_details33():
    return render_template('/product_details/product_details33.html')
@app.route("/product_details34")
def product_details34():
    return render_template('/product_details/product_details34.html')
@app.route("/product_details35")
def product_details35():
    return render_template('/product_details/product_details35.html')
@app.route("/product_details36")
def product_details36():
    return render_template('/product_details/product_details36.html')
@app.route("/product_details37")
def product_details37():
    return render_template('/product_details/product_details37.html')
@app.route("/product_details38")
def product_details38():
    return render_template('/product_details/product_details38.html')
@app.route("/product_details39")
def product_details39():
    return render_template('/product_details/product_details39.html')

@app.route("/cart")
def cart():
    return render_template('cart.html')

    

if __name__ == "__main__":
    app.debug= True
    app.run()