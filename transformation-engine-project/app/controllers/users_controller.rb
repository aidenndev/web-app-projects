class UsersController < ApplicationController
	before_action :authenticate_user!
	
	def index
	end

	def show
		@user = User.find(params[:id])
	end

	def destroy
		@user = User.find(params[:id])

		if @user.destroy
			redirect_to users_path, notice: "User deleted."
		else
			redirect_to users_path, flash: { error: "User could not be deleted." }
		end
	end

end
