batmanComment = `
                     Tb.          Tb.                                
                     :$$b.        $$$b.                              
                     :$$$$b.      :$$$$b.                            
                     :$$$$$$b     :$$$$$$b                           
                      $$$$$$$b     $$$$$$$b                          
                      $$$$$$$$b    :$$$$$$$b                         
                      :$$$$$$$$b---^$$$$$$$$b                        
                      :$$$$$$$$$b        ""^Tb                       
                       $$$$$$$$$$b    __...__\`.                      
                       $$$$$$$$$$$b.g$$$$$$$$$pb                     
                       $$$$$$$$$$$$$$$$$$$$$$$$$b                    
                       $$$$$$$$$$$$$$$$$$$$$$$$$$b                   
                       :$$$$$$$$$$$$$$$$$$$$$$$$$$;                  
                       :$$$$$$$$$$$$$^T$$$$$$$$$$P;                  
                       :$$$$$$$$$$$$$b  "^T$$$$P' :                  
                       :$$$$$$$$$$$$$$b._.g$$$$$p.db                 
                       :$$$$$$$$$$$$$$$$$$$$$$$$$$$$;                
                       :$$$$$$$$"""^^T$$$$$$$$$$$$P^;                
                       :$$$$$$$$       ""^^T$$$P^'  ;                
                       :$$$$$$$$    ."       "     ;                
                       $$$$$$$$;   /                :                
                       $$$$$$$$;           .----,   :                
                       $$$$$$$$;         ,"          ;               
                       $$$$$$$$$p.                   |               
                      :$$$$$$$$$$$$p.                :               
                      :$$$$$$$$$$$$$$$p.            .'               
                      :$$$$$$$$$$$$$$$$$$p...___..-"                 
                      $$$$$$$$$$$$$$$$$$$$$$$$$;                     
   .db.          bug  $$$$$$$$$$$$$$$$$$$$$$$$$$                     
  d$$$$bp.            $$$$$$$$$$$$$$$$$$$$$$$$$$;                    
 d$$$$$$$$$$pp..__..gg$$$$$$$$$$$$$$$$$$$$$$$$$$$                    
d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._            .gp. 
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._.ggp._.d$$$$b`;

console.log(batmanComment);
$(document).ready(function() {
    var $container = $('.blog-grid');

    var gutter = 30;
    var min_width = 345;
    $container.imagesLoaded(function() {
        $container.masonry({
            itemSelector: '.post',
            gutterWidth: gutter,
            isAnimated: true,
            columnWidth: function(containerWidth) {
                var box_width = (((containerWidth - gutter) / 2) | 0);

                if (box_width < min_width) {
                    box_width = (((containerWidth - gutter) / 2) | 0);
                }

                if (box_width < min_width) {
                    box_width = containerWidth;
                }

                $('.post').width(box_width);

                return box_width;
            }
        });
        $container.css({
            'visibility': 'visible',
            'display': 'none'
        }).parent().removeClass('loading');
    });
});

// Animate loader off screen
$(window).load(function() {
    $(".preload").fadeOut("slow");;
});

$(document).ready(function() {
    $(document).on("click", "#startupsheader", function() {
        toggledisplaystate('#startupsgrid');
    })

    $(document).on("click", "#internshipsheader", function() {
        toggledisplaystate('#internshipsgrid');
    })

    $(document).on("click", "#societiesheader", function() {
        toggledisplaystate('#societiesgrid');
    })

    $(document).on("click", "#backendprojectsheader", function() {
        toggledisplaystate('#backendprojectsgrid');
    })

    $(document).on("click", "#frontendprojectsheader", function() {
        toggledisplaystate('#frontendprojectsgrid');
    })

    $(document).on("click", "#technicalachievementsheader", function() {
        toggledisplaystate('#technicalachievementsgrid');
    })

    $(document).on("click", "#technologiesknownheader", function() {
        toggledisplaystate('#technologiesknowngrid');
    })
})

function toggledisplaystate(x) {
    if ($(x).is(":visible")) {
        $(x).hide(500);
    } else {
        $(x).show(500);
    }
}