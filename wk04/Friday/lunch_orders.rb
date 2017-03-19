# It's approaching lunch hour… let's collect orders. Create a new file called `lunch_orders.rb` to complete this exercise.
#
# 1. Create a program that collects lunch orders. Prompt:
#      * **Name for order:** (enter name)
#      * **{name} wants to order:** (enter item)
# 2. Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
#      * Example: **Greg** can order a *Burger*, and then add *Fries* to his order later.
# 3. After storing data, prompt the user with:
#      * **Add another item to the order? (y/n)**
#      * Repeat steps 1 & 2 if the answer is "y"
# 3. After the user completes adding orders, print out:
#      * **"All orders: {order data}"**

require 'pry'
require_relative 'order.rb'


puts 'Name for order'
name = gets().chomp()

customer = LunchOrder.new(name)

puts "#{name} wants to order"
customer_order = gets().chomp()
customer.order(customer_order)

puts "Add another item to the order? (y/n)"

while (input = gets().chomp()) != 'n' do

  puts "#{name} wants to order"
  customer_order = gets().chomp()
  customer.order(customer_order)

  puts "Add another item to the order? (y/n)"
end

customer.printout()
