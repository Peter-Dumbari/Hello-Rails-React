
class GreetingsController < ApplicationController

  def random_greeting
        # Query the database for a random message
        random_message = Message.order("RANDOM()").first
  
        if random_message
          render json: { message: random_message.content }
        else
          render json: { message: "No greetings available" }, status: :not_found
      end
  end
end