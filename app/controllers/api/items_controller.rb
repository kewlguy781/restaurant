class Api::ItemsController < ApplicationController

    def index 
        render json: Item.all
    end
    
    def create
    end
    
    def update
    end
    
    def destory
    end
    
    private
    
    def menu_params
        params.require(:item).permit(:name, :price)
    end
    
    end