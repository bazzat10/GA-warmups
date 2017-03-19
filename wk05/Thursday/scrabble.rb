# Scrabble Score
#
# Write a program that, given a word, computes the scrabble score for that word.
#
# Scrabble.score("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb.
#
# Letter Values
#
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions
#
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.


require 'pry'

class Scrabble

  def self.score(word)
    @word = word.split("")
    @array = []

    for i in 0..(@word.length-1)
      @word[i] = @word[i].tr('AEIOULNRSTDGBCMPFHVWYKJX', '111111111122333344444588')
      @word[i] = @word[i].gsub(/Q/, '10')
      @word[i] = @word[i].gsub(/Z/,'10')
      @array << @word[i].to_i # converts string to integers
    end

    @array.inject(0){|sum,x| sum + x }

  end

end

binding.pry
