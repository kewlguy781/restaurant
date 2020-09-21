class Api::MenusController < ApplicationController

def index 
    render json: Menu.all
end

def create
end

def update
end

def destory
end

private

def menu_params
    params.require(:menu).permit(:name)
end

end