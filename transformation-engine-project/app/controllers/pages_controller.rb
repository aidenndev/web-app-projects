class PagesController < ApplicationController
	before_action :authenticate_user!
	def home
	end

	before_action :set_root, only: [:upload, :download, :create]
	def upload
		begin


			json =  File.open("#{@root}/examplejson.json", "wb", row_sep: "\r\n") do |f|
				f.write(params[:json].read)
			end
			csv = File.open("#{@root}/person_address_input_testing.csv", "wb", row_sep: "\r\n") do |f|
				f.write(params[:csv].read)
			end

			puts("upload is done")


			system("ruby TransformationEngine.rb")

			@transformation = Transformation.new
			@transformation.user = current_user
			@transformation.name = params[:transformationName]
			@transformation.description = params[:transformationDescription]
			@transformation.complete = true
			#@transformation.input = Input.create(:input_name => params[:csv].original_filename)
			@transformation.save

			respond_to do |format|
				if @transformation.save
					format.html { redirect_to '/pages/download', notice: 'Transformation was successfully created.' }
				else
					format.html { render :new }
					format.json { render json: @transformation.errors, status: :unprocessable_entity }
				end
			end

			redirect_to '/pages/download'
		rescue Exception => e

		end
	end

	def new
	end

	def download
		send_file "#{@root}/output_result.csv", :disposition => 'attachment'
	end


	private

	def set_root
		@root = Rails.root
	end

end
