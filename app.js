new Vue({
    el: "#app",
    data:{
        pageMaxCount : 6,
        pageAmount : 0,

        // STATIC CONTENT
        items:[
            {
                name: "Astronomy Infographic",
                source: {
                    Dark: "images/astronomy.jpg"
                },
                activeTheme: "Dark",
                topic: ["Science"],
                type: ["Informational"],
                theme: ["Dark"],
                link: "pages/astronomy.html"
            },
            {
                name: "Healthy Food and Balanced Diet",
                source: {
                    Light: "images/balanced-diet.jpg",
                    Warm: "images/balanced-diet-warm.jpg"
                },
                activeTheme: "Light",
                topic: ["Food", "Health"],
                type: ["Statistical"],
                theme: ["Warm", "Light"],
                link: "pages/balanced-diet.html"
            },
            {
                name: "Blue Light",
                source: {
                    Cool: "images/blue-light.png",
                },
                activeTheme: "Cool",
                topic: ["Health"],
                type: ["Informational", "Statistical"],
                theme: ["Cool"],
                link: "pages/blue-light.html"
            },
            {
                name: "Smartphone vs Sleep",
                source: "images/blue-light-vs-sleep.png",
                source: {
                    Light: "images/blue-light-vs-sleep.png",
                    Cool: "images/blue-light-vs-sleep-cool.png"
                },
                activeTheme: "Light",
                topic: ["Health"],
                type: ["Informational", "Timeline"],
                theme: ["Cool", "Light"],
                link: "pages/blue-light-vs-sleep.html"
            },
            {
                name: "Brain Infographics Elements",
                source: "images/brain-infographics.jpg",
                source: {
                    Light: "images/brain-infographics.jpg",
                    Cool: "images/brain-infographics-cool.jpg",
                    Warm: "images/brain-infographics-warm.jpg"
                },
                activeTheme: "Light",
                topic: ["Health", "Science"],
                type: ["Informational"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/brain-infographics.html"
            },
            {
                name: "Business Work Strategy",
                source: "images/business-ideas.jpg",
                topic: ["Business"],
                type: ["Statistical"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/business-ideas.html"
            },
            {
                name: "Infographic Diagrams",
                source: "images/business-infographic.jpg",
                topic: ["Business"],
                type: ["Process", "Informational"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/business-infographic.html"
            },
            {
                name: "Chesapeake Bay Crab Pots",
                source: "images/chesapeake-bay.png",
                topic: ["Geagraphy"],
                type: ["Informational", "Statistical"],
                theme: ["Cool"],
                link: "pages/chesapeake-bay.html"
            },
            {
                name: "Inside the Mind of Kanye West",
                source: "images/cool-infographics-inspiration.jpg",
                topic: ["Science", "Health"],
                type: ["Informational", "Statistical"],
                theme: ["Cool", "Warm"],
                link: "pages/cool-infographics-inspiration.html"
            },
            {
                name: "Corporate Typography",
                source: "images/corporate-typography.jpg",
                topic: ["Business"],
                type: ["Informational"],
                theme: ["Light"],
                link: "pages/corporate-typography.html"
            },
            {
                name: "Cake Chocolate",
                source: "images/creative-food.jpg",
                topic: ["Food"],
                type: ["Informational"],
                theme: ["Light"],
                link: "pages/creative-food.html"
            },
            {
                name: "Hordes for the Holidays",
                source: "images/cyber-monday.jpg",
                topic: ["Business"],
                type: ["Informational", "Statistical"],
                theme: ["Light", "Dark", "Warm", "Cool"],
                link: "pages/cyber-monday.html"
            },
            {
                name: "Dementia: A Public Health Safety",
                source: "images/dementia.jpg",
                topic: ["Health"],
                type: ["Informational"],
                theme: ["Warm", "Cool"],
                link: "pages/dementia.html"
            },
            {
                name: "Education Around the World",
                source: "images/education-around-the-world.png",
                topic: ["Science, Geography"],
                type: ["Informational", "Statistical"],
                theme: ["Cool"],
                link: "pages/education-around-the-world.html"
            },
            {
                name: "Fastfood Infographic",
                source: "images/fast-food-infographic.jpg",
                topic: ["Food", "Geography"],
                type: ["Informational", "Statistical"],
                theme: ["Dark, Warm"],
                link: "pages/fast-food-infographic.html"
            },
            {
                name: "Fastfood Infographics",
                source: "images/fast-food-infographics.jpg",
                topic: ["Food", "Geography"],
                type: ["Informational", "Statistical"],
                theme: ["Warm"],
                link: "pages/fast-food-infographics.html"
            },
            {
                name: "Food Investigation",
                source: "images/food-investigation-infographic.png",
                topic: ["Food"],
                type: ["Informational", "Statistical"],
                theme: ["Cool", "Light"],
                link: "pages/food-investigation-infographic.html"
            },
            {
                name: "Health Infographics",
                source: "images/health-body.jpg",
                topic: ["Health, Science"],
                type: ["Informational"],
                theme: ["Cool"],
                link: "pages/health-body.html"
            },
            {
                name: "Infographic Health",
                source: "images/health-infographic.jpg",
                topic: ["Health, Science"],
                type: ["Informational"],
                theme: ["Cool", "Light", "Warm"],
                link: "pages/health-infographic.html"
            },
            {
                name: "Health Predictions",
                source: "images/health-predictions.jpg",
                topic: ["Health"],
                type: ["Informational", "Process"],
                theme: ["Cool", "Warm"],
                link: "pages/health-predictions.html"
            },
            {
                name: "Healthy Food Infographic",
                source: "images/healthy-food-infographic.jpg",
                topic: ["Health, Food"],
                type: ["Informational", "Statistical"],
                theme: ["Cool", "Warm", "Dark"],
                link: "pages/healthy-food-infographic.html"
            },
        ],
        
        // FILTERED ITEMS
        filteredItems: [],
        
        // SORTED ITEMS INTO PAGES
        displayedItems:[],
        
        sorting : {
            topic: false,
            type: false,
            colorTheme: false,
        },
        currentPage : 1,
        searchActive: false,
        appliedFilter: [],
        search: "",
    },
    mounted(){
        // SETUP THE PAGES
        this.filteredItems = this.items;
        this.dividePages();
    },
    watch:{
        // IF FILTER CHANGES, CHANGE THE DOM ACCORDINGLY
        appliedFilter: function(){
            this.filteredItems = this.items.filter(item => {
                let tags = item.topic.concat(item.type, item.theme);
                let counter = 0;
                for(let filter of this.appliedFilter){
                    if(tags.includes(filter)) counter++;
                    if(item.theme.includes(filter)){
                        item.activeTheme = filter;
                    }
                }
                return (counter == this.appliedFilter.length && item.name.toLowerCase().match(this.search.toLowerCase()));
            });
            this.dividePages();
            this.currentPage = 1;
        }
    },
    computed:{
        // OPTIONAL PREVIOUS PAGE BUTTON
        displayPrevious: function(){
            return(this.currentPage != 1);
        },
        // OPTIONAL NEXT PAGE BUTTON
        displayNext: function(){
            return(this.currentPage < this.pageAmount);
        },
        // CHANGE IMAGE ACCORDING TO THE SORTED THEME
        imgSource: function(){
            for(let item of this.filteredItems){
                let tags = item.topic.concat(item.type, item.theme);
            }
        }
    },
    methods:{
        // SWITCH SORTING CATEGORY
        changeSorting: function(type){
            let vm = this;
            let active = ""
            Object.keys(this.sorting).forEach(key => {
                if(vm.sorting[key] == true) active = key;
                vm.sorting[key] = false;
            });
            if(active != type){
                setTimeout(function(){
                    vm.sorting[type] = true;
                }, 300)
            } 
        },
        // REMOVE FILTER FROM FILTER ARRAY
        removeFilter: function(filter){
            this.appliedFilter.splice(this.appliedFilter.indexOf(filter), 1);
        },
        // ADD FILTER TO FILTER ARRAY
        applyFilter: function(event){
            if(this.appliedFilter.indexOf(event.target.textContent) == -1)this.appliedFilter.push(event.target.textContent);
        },
        // FILTER ITEMS BASED ON SEARCH
        applySearch: function(){
            this.appliedFilter = [];
            console.log(this.search);
            this.filteredItems = this.items.filter((item) => {
                return item.name.toLowerCase().match(this.search.toLowerCase());
            });
        },
        // DIVIDE THE ITEMS INTO A NUMBER OF PAGES
        dividePages: function(){
            this.displayedItems = [];
            this.pageAmount = Math.floor((this.filteredItems.length-1)/this.pageMaxCount)+1;
            let remainder = Math.floor((this.filteredItems.length-1)%this.pageMaxCount)+1;
            for(let i=1; i<=this.pageAmount; i++){
                this.displayedItems.push([]);
                if(i == this.pageAmount){
                    for(let j=0; j<=remainder-1; j++){
                        this.displayedItems[i-1].push(this.filteredItems[(i-1)*this.pageMaxCount+j]);
                    }
                }
                else {
                    for(let j=0; j<=this.pageMaxCount-1; j++){
                        this.displayedItems[i-1].push(this.filteredItems[(i-1)*this.pageMaxCount+j]);
                    }
                }
            }
        },
        // CHANGE COLOR OF BUTTONS
        buttonColor: function(color){
            if(color == 'Light') return {
                'background-color': 'white'
            }
            else if(color == 'Dark') return {
                'background-color': '#222222'
            }
            else if(color == 'Warm') return {
                'background-color': '#c74511'
            }
            else if(color == 'Cool') return {
                'background-color': '#1148c7'
            }
        }
    }
});