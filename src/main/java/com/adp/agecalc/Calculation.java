package com.adp.agecalc;

import java.time.LocalDate;
import java.time.Period;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/calc")
public class Calculation {

	@GetMapping("/ageCalc")
	private ResponseEntity<String> calculateAge(
			@RequestParam(value = "fromDt",required = true) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate fromDt,
			@RequestParam(value = "toDt",required = true) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate toDt) {
		Period period = Period.between(fromDt, toDt);
		String age =  "Age is " + period.getYears() + " Years " + period.getMonths() + " Months " + period.getDays() + " Days";
		return ResponseEntity.ok(age );

	}
}
