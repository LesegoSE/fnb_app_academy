itemPrice = []
itemName = []
totalPrice = 0.0

while True:
    productName = input("Enter name off item: ")
    
    if productName == "q":
        break
    else:
        productPrice = float(input(f"Enter price of {productName}: R"))
        itemName.append(productName)
        itemPrice.append(productPrice)
        
print("\n========= YOUR CART =========\n")

for i,n in zip(itemName,itemPrice):
    print("‣ " + i + "\t- R" + str(n))
    
for i in itemPrice:
    totalPrice += i
    
print("\nTotal price = R" + str(totalPrice))
print("\n========= Thank you for your support =========")