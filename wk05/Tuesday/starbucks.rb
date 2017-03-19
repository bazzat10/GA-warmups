# Starbucks
#
# Write a program that holds on to coffee orders.
#
# c1 = Coffee.new('latte','2 sugars','medium','Darryl')
#
# Write the .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."
#
# Extension
#
# Starbucks always gets names wrong, however. Make the name a bad misspelling of the actual name when you create the order.
# puts c1
# # => "Barrel's latte, medium, 2 sugars."
# When you make a new order, you have to wait for coffee. When you create the new order, there should be a waiting time of anywhere between 2-5 minutes. You should be able to check if it's ready by calling c1.ready? and have the program yell out the order and the misspelled name.
#
# You should be able to mark the coffee as collected with c1.collected = true.
#
# List all of the coffees not collected.
#
# Add options to the coffee order, eg shot of hazelnut, whipped cream, chocolate syrup.
#
# Extension 2
#
# Now do it with js.


require 'pry'
require_relative 'coffee.rb'

puts "Welcome to Starbucks"

puts "Please enter your coffee type"
type = gets().chomp

puts "How many sugars?"
no_of_sugars = gets().chomp

puts "Coffee size? large/medium/small"
size = gets().chomp

puts 'Please enter your name'
name = gets().chomp

c1 = Coffee.new(type, no_of_sugars, size, name)
c1.change_name

puts(c1) # def to_s automatically prints out t

binding.pry
