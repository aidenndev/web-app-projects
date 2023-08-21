class TransformDefinitionsController < ApplicationController
  before_action :set_transform_definition, only: [:show, :edit, :update, :destroy]

  # GET /transform_definitions
  # GET /transform_definitions.json
  def index
    @transform_definitions = TransformDefinition.all
  end

  # GET /transform_definitions/1
  # GET /transform_definitions/1.json
  def show
  end

  # GET /transform_definitions/new
  def new
    @transform_definition = TransformDefinition.new
  end

  # GET /transform_definitions/1/edit
  def edit
  end

  # POST /transform_definitions
  # POST /transform_definitions.json
  def create
    @transform_definition = TransformDefinition.new(transform_definition_params)

    respond_to do |format|
      if @transform_definition.save
        format.html { redirect_to @transform_definition, notice: 'Transform definition was successfully created.' }
        format.json { render :show, status: :created, location: @transform_definition }
      else
        format.html { render :new }
        format.json { render json: @transform_definition.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /transform_definitions/1
  # PATCH/PUT /transform_definitions/1.json
  def update
    respond_to do |format|
      if @transform_definition.update(transform_definition_params)
        format.html { redirect_to @transform_definition, notice: 'Transform definition was successfully updated.' }
        format.json { render :show, status: :ok, location: @transform_definition }
      else
        format.html { render :edit }
        format.json { render json: @transform_definition.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /transform_definitions/1
  # DELETE /transform_definitions/1.json
  def destroy
    @transform_definition.destroy
    respond_to do |format|
      format.html { redirect_to transform_definitions_url, notice: 'Transform definition was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transform_definition
      @transform_definition = TransformDefinition.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def transform_definition_params
      params.require(:transform_definition).permit(:name, :description, :transformation_id)
    end
end
