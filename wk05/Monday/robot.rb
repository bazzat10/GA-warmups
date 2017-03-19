class Robot

  attr_accessor :character, :number, :string

  def initialize ()
    @character = []
    @number = 0

    for i in 0..1
      @character << ('A'..'Z').to_a.sample
      # @character << (rand(90 - 65) + 90).chr
     you can use
    end

    @string = @character.join()
    @number = rand(999-100) + 100
  end

  def name()
    puts "#{@string}#{@number}"
  end

  def reset()
    
  end

end
