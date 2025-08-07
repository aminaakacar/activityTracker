package com.example.backend.controller;

import com.example.backend.model.Activity;
import com.example.backend.repository.ActivityRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PutMapping("/{id}")
    public ResponseEntity<Activity> updateActivity(@PathVariable Long id, @RequestBody Activity updatedActivity) {
        Optional<Activity> existingActivityOpt = repository.findById(id);

        if (existingActivityOpt.isPresent()) {
            Activity existingActivity = existingActivityOpt.get();

            existingActivity.setName(updatedActivity.getName());
            existingActivity.setDescription(updatedActivity.getDescription());
            existingActivity.setCategory(updatedActivity.getCategory());
            existingActivity.setDate(updatedActivity.getDate());
            existingActivity.setDuration(updatedActivity.getDuration());

            repository.save(existingActivity);
            return ResponseEntity.ok(existingActivity);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
