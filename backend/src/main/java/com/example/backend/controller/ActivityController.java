package com.example.backend.controller;

import com.example.backend.model.Activity;
import com.example.backend.repository.ActivityRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activities")
@CrossOrigin(origins = "*") 
public class ActivityController {

    private final ActivityRepository repository;

    public ActivityController(ActivityRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Activity> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Activity addActivity(@RequestBody Activity activity) {
        return repository.save(activity);
    }

    @DeleteMapping("/{id}")
    public void deleteActivity(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
