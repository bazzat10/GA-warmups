class Coffee

  attr_accessor :type, :no_of_sugars, :size, :name

  def initialize (type, no_of_sugars, size, name)
    @type = type
    @no_of_sugars = no_of_sugars
    @size = size
    @name = name
  end

  def change_name
    @new_name = @name.tr('abciy', 'odkee')  # => change characters
  end

  # def ready
  #
  # end

  def to_s #converts to string this method will be automatically called when you do puts c1
    #@new_name + "'s " + @type + ", " + @size + ", " + @no_of_sugars + ' sugars' # OR
    "#{@new_name}'s #{@type}, #{@size}, #{@no_of_sugars} sugars."
  end
end
