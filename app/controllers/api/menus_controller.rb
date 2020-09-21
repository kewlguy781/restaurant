class Api::MenusController < ApplicationController

def index 
    render json: Menu.all
end

def create
    menu = Menu.new(menu_params)
    if (menu.save)
        render json: menu
    else
        render json: { errors: menu.errors }, status: :unprocessable_entity
    end
end

def update
end

def destory
end

private

def menu_params
    params.require(:menu).permit(:menu_name)
end

end