# Dice
#
# Write a program using classes to generate a standard dice roll.
#
# Dice.roll
# # => 6
# It should give you a different result each time.
#
# Dice.roll
# # => 5
# Dice.roll
# # => 2
# When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice
#
# Dice.roll(3)
# # => [2,5,1]
# Extension
#
# Write a method called sum you can chain directly after Dice.roll(n), and will return you the dice and the total, like so:
# Dice.roll(5).sum
# # => [[6,6,5,5], 22]
# At first you will get a NoMethodError for a certain ruby class.
#
# How do you fix this?
#
# Why do you get a NoMethodError on that class instead of the class you wrote?
#
# Display die faces after rolling.
# ________
# | *  * |
# | *  * |
# ________


require 'pry'

class Dice

  attr_accessor :numbers

  def self.roll(num_roll=1) # give a default value of 1 // or we can use Dice.roll instead of self.roll
    @@numbers = []
    for i in 0..(num_roll-1)
      @@numbers << (1..6).to_a.sample
    end
    @@numbers
    self
  end

  def self.sum()
      @@numbers << @@numbers.inject(0){|sum,x| sum + x }
  end

end

binding.pry
