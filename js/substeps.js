function substeps() {
    var getSubsteps = document.querySelectorAll(".substep");
    var getPresentSubstep = document.querySelectorAll(" .substep");

    var triggerEvent = function (el, eventName, detail) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, detail);
        el.dispatchEvent(event);
    };


    // Returns the first substep element marked as future
    // or false if there are no future substeps
    var getNextSubstep = function(element) {
        var result = false;
        var substeps = getSubsteps(element);
        if (substeps.length > 0) {
            var futureSubsteps = document.querySelectorAll(".future .substep");
            if (futureSubsteps.length > 0) {
                result = futureSubsteps[0];
            }
        }
        return result;
    };

    // Returns the last substep element marked as past
    // or false if there are no past substeps
    var getPreviousSubstep = function(element) {
        var result = false;
        var substeps = getSubsteps(element);
        if (substeps.length > 0) {
            var pastSubsteps = document.querySelectorAll(".past .substep");
            if (pastSubsteps.length > 0) {
                result = pastSubsteps[pastSubsteps.length - 1];
            }
        }
        return result;
    };

    // helper for navigation forward a substep
    var substepForward = function (element) {
        if (getPresentSubstep(element)) {
            var presentSubstep = getPresentSubstep(element);
            presentSubstep.classList.remove("present");
            presentSubstep.classList.add("past");
            triggerEvent(presentSubstep, "impress:substep-exit");
        }
        var nextSubstep = getNextSubstep(element);
        nextSubstep.classList.remove("future");
        nextSubstep.classList.add("present");
        nextSubstep.classList.add("active");
        // trigger events
        triggerEvent(nextSubstep, "impress:substep-active");
        triggerEvent(nextSubstep, "impress:substep-enter");
    };



    // helper for navigation back a substep
    var substepBackward = function (element) {
        var presentSubstep = getPresentSubstep(element);
        presentSubstep.classList.remove("present");
        presentSubstep.classList.add("future");
        presentSubstep.classList.remove("active");

         // trigger events
        triggerEvent(presentSubstep, "impress:substep-inactive");
        triggerEvent(presentSubstep, "impress:substep-exit");

        if (getPreviousSubstep(element)) {
            var previousSubstep = getPreviousSubstep(element);
            previousSubstep.classList.remove("past");
            previousSubstep.classList.add("present");
            triggerEvent(previousSubstep, "impress:substep-enter");   
        }
    };

}
    