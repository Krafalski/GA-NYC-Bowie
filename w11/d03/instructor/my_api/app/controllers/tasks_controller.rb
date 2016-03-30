class TasksController < ApplicationController
  before_action :set_task, only: [:show, :update,:destroy]

  before_action :authenticate
  
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def create
    # Task.create(task_params)

    @task = Task.new(task_params)

    if @task.save
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
    
  end

  def show
    render json: @task
  end

  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @task.destroy
  end

  private

  def task_params
    params.require(:task).permit(:name, :status)
  end
  
  def set_task
    @task = Task.find(params[:id])
  end
  
end
